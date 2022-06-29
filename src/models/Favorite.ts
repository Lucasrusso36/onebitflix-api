import { database } from '../database'
import { DataTypes, Model } from 'sequelize'
import { CourseInstance } from './Course'
import { UserInstance } from './User'

export interface FavoriteAttributes {
  userId: number
  courseId: number
}

export interface FavoriteInstance extends Model<FavoriteAttributes>, FavoriteAttributes {
  course?: CourseInstance
	user?: UserInstance
}

export const Favorite = database.define<FavoriteInstance, FavoriteAttributes>('favorites', {
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  courseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'courses', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})
