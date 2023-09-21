import { StaticImageData } from "next/image"
import DiscordThumb from "@/public/discord-thumb.webp"
import YoutubeThumb from "@/public/youtube-thumb.webp"
type ProjectCard = {
    title: string
    description: string
    technologies: string[]
    imageSrc: StaticImageData
    altText: string
    liveDemoLink: string
    sourceCodeLink: string
    heightOfImage: number
    widthOfImage: number
}
const FixedHeightOfImage = 1200;
const FixedWidthOfImage = 1200;
const Cards : ProjectCard[] = [
    {
        title: "Discord Application",
        description: "This is a Discord application where you can invite it to your server and play various types of games. This bot is primarily focused on role-playing game elements, such as leveling up, gaining experience, and fighting monsters. It has been completed and used by over 1,000 users.",
        technologies: ["Node.js", "MongoDB", "AWS", "JavaScript"],
        imageSrc: DiscordThumb,
        altText: "Discord Project",
        liveDemoLink: "https://www.discord.com",
        sourceCodeLink: "https://github.com/GhouI/Tenkai",
        heightOfImage: FixedHeightOfImage,
        widthOfImage: FixedWidthOfImage
    },
    {
        title: "Youtube Automation Tool",
        description: "This tool allows you to upload videos automatically without giving them a thought. All the content is generated by OpenAI ChatGPT.",
        technologies: ["Typescript", "MongoDB", "FFmpeg", "OpenAI", "YoutubeAPI"],
        imageSrc : YoutubeThumb,
        altText: "Youtube Project",
        liveDemoLink: "https://www.youtube.com",
        sourceCodeLink: "https://github.com/GhouI/youtube-video-automation",
        heightOfImage: FixedHeightOfImage,
        widthOfImage: FixedWidthOfImage
    },    
]

export default Cards;