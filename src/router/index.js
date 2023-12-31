import {createRouter, createWebHistory} from 'vue-router';

import Lore from "@/components/partials/content_windows/Lore.vue";
import Planning from "@/components/partials/content_windows/Planning.vue";
import Home from "@/components/partials/content_windows/Home.vue";
import LoadingHome from "@/components/partials/content_windows/LoadingHome.vue";
import Blog from "@/components/partials/content_windows/Blog.vue";
import ProcessedBlog from "@/components/partials/content_windows/ProcessedBlog.vue";
import Wallpaper from "@/components/partials/content_windows/Wallpaper.vue";
import NotFound from "@/components/partials/content_windows/NotFound.vue";
import CommandLine from "@/components/partials/content_windows/CommandLine.vue";

const routes = [
    {path: '/', name: 'LoadingHome', component: LoadingHome},
    {path: '/home', name: 'Home', component: Home},
    {path: '/planning', name: 'Planning', component: Planning},
    {path: '/blog', name: 'Blog', component: Blog},
    {path: '/lore', name: 'Lore', component: Lore},
    {path: '/blog/:entry', name: 'ProcessedBlog', component: ProcessedBlog},
    {path: '/wallpaper', name: 'Wallpaper', component: Wallpaper},
    {path: '/cmd', name: 'CMD', component: CommandLine},
    {path: '/:notFound', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
