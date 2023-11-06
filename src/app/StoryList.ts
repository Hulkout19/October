export const STORY: any = [
    {
        id: 1,
        title: "Designing Plans",
        description: "A story about an architect",
        iconUrl: "/October/assets/bookcase.jpg",
        active: true,
        storyUrl: "/October/architect"
    },
    {
        id: 2,
        title: "A Line in the Sand",
        description: "A story about an giant",
        iconUrl: "/October/assets/Arizona.jpg",
        active: true,
        storyUrl: "/October/giants"
    },
    {
        id: 3,
        title: "Agent Chaos",
        description: "A story about an agent",
        iconUrl: "/October/assets/kitchen.jpg",
        active: true,
        storyUrl: "/Ocobter/agent"
    },
    
]

export function findStoryById(storyId:number) {
    return STORY.find((story: { id: number; }) => story.id == storyId);
}

export function findAllActiveStories(){
    return STORY.find((story: { active: boolean; }) => story.active == true);
}