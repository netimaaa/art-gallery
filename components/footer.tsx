import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("bg-[#2C2D26] py-[65px]", className)}>
      <div className="max-w-[969px] mx-auto">
        <div className="flex gap-[165px] justify-between">
          <ul>
            <li className="text-white font-bold">Product</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[10px]">
              Autocapture
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Data Governance
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Virtual Events
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Virtual Users
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Behavioral Analytics
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">Connect</li>
          </ul>
          <ul>
            <li className="text-white font-bold">Explore</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[10px]">
              Resources
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">Blog</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Documents
            </li>
          </ul>
          <ul>
            <li className="text-white font-bold">Community</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[10px]">
              Community Central
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">Support</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">Help</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">My info</li>
          </ul>
          <ul>
            <li className="text-white font-bold">Company</li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[10px]">
              About us
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Partners
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Customers
            </li>
            <li className="text-[#E9E9DB]/50 font-medium pt-[15px]">
              Contact us
            </li>
          </ul>
        </div>
        <div className="text-center text-white font-medium" id="footer">
          <h1 className="uppercase text-[110px]">lamda</h1>
          <p className="tracking-widest">
            © 2022 - 2023 Lamda Museum. All rights reserved.{" "}
          </p>
          <div className="flex justify-center mt-[25px] gap-[27px] items-center">
            <Facebook fill="white" />
            <Twitter fill="white" />
            <Instagram />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};
