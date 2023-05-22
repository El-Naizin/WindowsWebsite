import {createRouter, createWebHistory} from 'vue-router';

import Lore from "@/components/partials/content_windows/Lore.vue";
import Planning from "@/components/partials/content_windows/Planning.vue";
import Home from "@/components/partials/content_windows/Home.vue";
import Blog from "@/components/partials/content_windows/Blog.vue";
import BlogEntryTemplate from "@/components/partials/content_windows/BlogEntryTemplate.vue";
import Wallpaper from "@/components/partials/content_windows/Wallpaper.vue";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/planning', name: 'Planning', component: Planning},
    {path: '/blog', name: 'Blog', component: Blog},
    {path: '/lore', name: 'Lore', component: Lore},
    {path: '/blog/:entry', name: 'BlogEntryTemplate', component: BlogEntryTemplate},
    {path: '/wallpaper', name: 'Wallpaper', component: Wallpaper},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
