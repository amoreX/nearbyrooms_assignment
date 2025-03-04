import Link from "next/link"


export default function Navbar(){
    return(
        <div className="flex flex-col ">
            <Link href="/Components/Home">Home</Link>
            <Link href="/Components/Chat">Chat</Link>
            <Link href="/Components/Profile">Profile</Link>
            <Link href="/Components/Post">Post</Link>
        </div>
    )
}