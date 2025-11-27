'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const UserDropdown = () => {
    const router = useRouter();

    // allow user to sign out
    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    // dummy user object
    const user = { name: 'Lynden', email: 'lyndenfenn@gmail.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        {/* my GitHub profile picture*/}
                        <AvatarImage src="https://avatars.githubusercontent.com/u/145921468?s=400&u=8ef8a9188288375b8853bf661f06be7ff5c22278&v=4" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md-flex flex-col items-start">
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <div className="flex items-center gap-3 py-2">
                    <Avatar className="h-8 w-8">
                        {/* my GitHub profile picture*/}
                        <AvatarImage src="https://avatars.githubusercontent.com/u/145921468?s=400&u=8ef8a9188288375b8853bf661f06be7ff5c22278&v=4" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
