import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Post from './Posts';
 
@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  public id: string;
 
  @Column()
  public name: string;
 
  @Column()
  public email: string;
 
  @Column()
  public password: string;
 
  @OneToMany(() => Post, (post: Post) => post.user)
  public posts: Post[];
}
 
export default User;