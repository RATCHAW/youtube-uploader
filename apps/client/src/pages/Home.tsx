import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadVideoBody } from "@vu/validation";

interface FormData {
    thumbnail: File;
    video: File;
    title: string;
    description: string;
}

const Home = () => {
    const form = useForm<FormData>({
        resolver: zodResolver(uploadVideoBody),
    });

    const { mutate } = useMutation({
        mutationKey: ["upload"],
        mutationFn: async (data: FormData) => {
            const response = await fetch("/api/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return responseData;
        },
    });

    const onSubmit = (data: FormData) => {
        mutate(data);
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-96">
                <Label>Thumbnail image</Label>
                <input
                    {...form.register("thumbnail")}
                    className="flex h-9 w-full cursor-pointer rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                />
                <Label>Video</Label>
                <input
                    {...form.register("video")}
                    className="flex h-9 w-full cursor-pointer rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                />

                <Label>Title</Label>
                <Input {...form.register("title")} placeholder="Title" />
                <Label>Description</Label>
                <Input {...form.register("description")} placeholder="Description" />
                <Button>Upload</Button>
            </form>
        </div>
    );
};

export default Home;
