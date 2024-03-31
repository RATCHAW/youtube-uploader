import { Button } from "@/components/ui/button";
import GoogleLogo from "@/assets/google-logo.svg?react";

const Login = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <Button className="space-x-2 text-2xl p-6 rounded-xl">
                <GoogleLogo className="size-8" />
                <span>Sign In</span>
            </Button>
        </div>
    );
};

export default Login;
