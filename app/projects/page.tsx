"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';


export default function Project(){
    const router = useRouter();
    const handleOSVisitBTN = () => {
        router.push('/ospriorityscheduling');
    };

    return (
        <div className="border border-black-500 w-full h-[90%] flex flex-col pl-20 pr-20 bg-[#0a0d12]">
            <Card className="border border-white text-white mt-20 w-[17%]">
                <CardHeader>
                    <CardTitle>
                        OS Priority Scheduling
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <img src="os.jpg" alt="os image" />
                    <CardDescription>
                        <p>OS Priority Scheduling assigns priorities to processes, with higher priority processes being executed first. It can be preemptive or non-preemptive, but may lead to starvation for lower-priority processes.</p>
                    </CardDescription>
                </CardContent>
                <CardAction>
                    <Button variant="link" className="text-white text-xl" onClick={handleOSVisitBTN}>VISIT!</Button>
                </CardAction>
            </Card>
            
        </div>
    );
}