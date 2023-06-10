import {createRouter, createWebHistory} from 'vue-router';

import Lore from "@/components/partials/content_windows/Lore.vue";
import Planning from "@/components/partials/content_windows/Planning.vue";
import Home from "@/components/partials/content_windows/Home.vue";
import Blog from "@/components/partials/content_windows/Blog.vue";
import ProcessedBlog from "@/components/partials/content_windows/ProcessedBlog.vue";
import Wallpaper from "@/components/partials/content_windows/Wallpaper.vue";
import NotFound from "@/components/partials/content_windows/NotFound.vue";
import CommandLine from "@/components/partials/content_windows/CommandLine.vue";

const routes = [
    {path: '/~khimayan/', name: 'Home', component: Home},
    {path: '/~khimayan/planning', name: 'Planning', component: Planning},
    {path: '/~khimayan/blog', name: 'Blog', component: Blog},
    {path: '/~khimayan/lore', name: 'Lore', component: Lore},
    {path: '/~khimayan/blog/:entry', name: 'ProcessedBlog', component: ProcessedBlog},
    {path: '/~khimayan/wallpaper', name: 'Wallpaper', component: Wallpaper},
    {path: '/~khimayan/cmd', name: 'CMD', component: CommandLine},
    {path: '/~khimayan/:notFound', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
