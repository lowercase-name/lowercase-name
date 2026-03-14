import { getCollection } from 'astro:content';

export async function slug(name: any) {
    const posts = await getCollection(name);

    posts.forEach((post: any) => {
        const date = new Date(post.data.date);
        const day = ('0' + date.getUTCDate()).slice(-2);
        const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
        const year = date.getUTCFullYear();

        const slugify = (filePath: string) => {
            let fileName = filePath.split("/").pop();
            fileName = fileName?.split(".").shift() || "";
            return fileName
                .toLowerCase()
                .replace(/[^a-z0-9 -]/g, "")
                .replace(/\s+/g, "-");
        };

        post.id = slugify(post.data.title);
        post.data.goodDate = `${year}-${month}-${day}`;
    });

    return posts;
};