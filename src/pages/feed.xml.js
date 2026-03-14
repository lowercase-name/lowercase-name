import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { slug } from "../util/slug";

export async function GET(context) {
    const preSort = await slug('blog');
    const blog = preSort.sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    )
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            date: post.data.date,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}