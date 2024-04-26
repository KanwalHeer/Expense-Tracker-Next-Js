import Link from "next/link"


function Home() {
    return(
        <div><h1>Expense App</h1>
       <Link href={"/expense"}><li><a>Go to Expense Tracker App</a></li></Link>
        </div>
    )
}
export default Home