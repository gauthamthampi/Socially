'use client';
import SignupLayout from "@/components/signup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem('sociallyToken');
        if (token) {
            router.push("/home");
        } else {
            setLoading(false); 
        }
    }, [router]); 

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="loader"></div>
                <style jsx>{`
                    .loader {
                        border: 8px solid rgba(255, 255, 255, 0.3);
                        border-top: 8px solid rgba(255, 255, 255, 0.9);
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <SignupLayout />
    );
}

export default SignupPage;
