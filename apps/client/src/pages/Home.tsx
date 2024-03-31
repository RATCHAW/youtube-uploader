import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

const Home = () => {
    const form = useForm();

    return (
        <div className="flex h-screen justify-center items-center">
            <form className="flex flex-col space-y-4 w-96">
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
