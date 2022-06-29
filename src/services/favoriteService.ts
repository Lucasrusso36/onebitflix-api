import { Favorite } from "../models/Favorite"

export const favoriteService = {
	create: async (profileId: number, courseId: number) => {
    const favoriteAlreadyExists = await Favorite.findOne({
      where: {
        profileId,
        courseId
      }
    })

    if (favoriteAlreadyExists) {
      throw new Error('Curso já existente na lista')
    }

    const favorite = await Favorite.create({
      profileId,
      courseId
    })

    return favorite
  },
}