import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
export const Home = () => {
    const object = {
        id: 1,
        name: 'Abdul'
    }
    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
    </div>
}
