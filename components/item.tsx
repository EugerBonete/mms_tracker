import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon, CircleIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  date: string;
  img: string;
  location: string;
  working: boolean;
};

export default function Item({
  date,
  description,
  img,
  location,
  working,
  title,
}: Props) {
  return (
    <Card>
      <CardContent className="relative aspect-video">
        <Image src={img} alt="Asset Image" fill className="object-cover" />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="text-xs flex justify-center gap-x-5">
        <div className="flex flex-col items-center">
          <MapPinIcon size={15} />
          <p>{location}</p>
        </div>

        <div className="flex flex-col items-center">
          <CircleIcon
            className={cn(
              "text-background",
              working ? "fill-green-500" : "fill-red-500"
            )}
            size={15}
          />
          <p>{working ? "working" : "not working"}</p>
        </div>

        <div className="flex flex-col items-center">
          <CalendarIcon size={15} />
          <p>{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
