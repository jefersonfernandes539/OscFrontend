import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-red-400 hover:bg-red-800 font-bold">
          Cartografia da Cultura
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/" className="font-semibold">
            Sobre
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/map" className="font-semibold">
            Acessar Mapa
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
