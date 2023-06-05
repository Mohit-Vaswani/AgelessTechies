import Link from "next/link";
import Image from "next/image";
import person1 from "../public/assets/person1.png"
import person2 from "../public/assets/person5.png"
import person3 from "../public/assets/person3.png"
import person4 from "../public/assets/person4.png"

export default function HomePage() {
    return (
        <main>
            <div className="textHeader">
                <div className="heading">
                    <h1>The <span className="specialText">Only</span> Community</h1><br />
                    <h1>You Need To Join</h1><br />
                    <h1>As a Tech Enthusiat</h1><br />
                </div>
                <div className="cta">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem possimus consequuntur amet, a doloremque sequi similique praesentium sunt eius, voluptates tenetur dolor numquam odit aperiam soluta laborum quisquam fugiat voluptatem sapiente molestiae alias mollitia perferendis laudantium. Tenetur saepe sed aut voluptatum animi maxime adipisci commodi quas consequatur cumque, earum blanditiis.</p>
                    <Link href="/">
                        <button className="ctaBtn">
                            Call To Action
                        </button>
                    </Link>
                </div>
            </div>
            <div className="imageHeader">
                <div className="roundedBox">
                    <div className="personBox">
                        <p>Elizabeth, 24</p>
                        <p>Learning IOS Development</p>
                    </div>
                    <Image src={person1} alt="person" width={200} height={300} />
                </div>
                <div className="roundedBox">
                    <div className="personBox">
                        <p>Michael, 14</p>
                        <p>Learning ML and Python</p>
                    </div>
                    <Image src={person2} alt="person" width={500} height={400} />
                </div>
                <div className="roundedBox">
                    <div className="personBox">
                        <p>Rachel, 45</p>
                        <p>Learning Web Development</p>
                    </div>
                    <Image src={person3} alt="person" width={200} height={300} />
                </div>
                <div className="roundedBox">
                    <div className="personBox">
                        <p>George, 57</p>
                        <p>Learning Database Management</p>
                    </div>
                    <Image src={person4} alt="person" width={200} height={300} />
                </div>
            </div>
        </main>
    )
}
