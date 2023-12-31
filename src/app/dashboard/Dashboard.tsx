import Card from "../components/Card";

export default function Home() {
    return (<>
        <div className="flex flex-wrap h-screen justify-center content-center mx-64">
                {Array(20).fill(0).map(() =>
                    Card({ front: "aaa", back: "bbbb" }))}
        </div>
    </>);
}