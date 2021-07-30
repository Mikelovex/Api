import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import User from './User';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public title: string;
 
  @Column()
  public content: string;

  @Column()
  public user_id: string
 
  @ManyToOne(() => User, (user: User) => user.posts)
  @JoinColumn({name: 'user_id'})
  public user: User;
}
 
export default Post;