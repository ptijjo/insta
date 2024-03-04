/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { CreatePostDto } from '@dtos/posts.dto';
import { HttpException } from '@/exceptions/httpException';
import { Post } from '@interfaces/posts.interface';

@Service()
export class UserService {
  public post = new PrismaClient().post;

  public async createPost(userId,postData: CreatePostDto): Promise<Post> {
    const createPostData:Post = this.post.create({
      data: {
        ...postData,
      },
    });

    return createPostData;
  }
}
