import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types"

import db from '$lib/database'



export const GET: RequestHandler = async () => {

    const posts = await db.post.findMany()
    return json(posts)
};