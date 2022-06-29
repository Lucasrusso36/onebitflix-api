import { Like } from "../models"

export const likeService = {
  create: async (userId: number, courseId: number) => {
    const likeAlreadyExists = await Like.findOne({
      where: {
        userId,
        courseId
      }
    })

    if (likeAlreadyExists) {
      throw new Error('Este usuário já gostou deste curso')
    }

    const like = await Like.create({
      userId,
      courseId
    })

    return like
  }
}