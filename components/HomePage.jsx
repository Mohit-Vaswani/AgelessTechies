import Link from "next/link";

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

        </div>
    </main>
  )
}
