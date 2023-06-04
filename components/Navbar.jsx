import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <h2>AgelessTechies</h2>
            <ul>
                <li>Blogs</li>
                <li>Resources</li>
                <li>Who we are</li>
            </ul>
            <Link href="/">
                <button className="communityBtn">
                    Join Our Community
                </button>
            </Link>
        </nav>
    )
}
