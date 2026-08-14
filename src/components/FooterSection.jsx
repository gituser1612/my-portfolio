import { ArrowUp } from "lucide-react"

const FooterSection = () => {
  return (
    <footer className="py-2 px-4 bg-card relative border-t border-border mt-12 pt-2 flex flex-wrap justify-center gap-5 items-center">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} | All rights reserved.</p>
      <a className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" href="#hero">
        <ArrowUp size={20}/>
      </a>
    </footer>

  )
}

export default FooterSection