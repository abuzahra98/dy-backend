// src/entity/User.ts

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Header extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar" })
  color: string | undefined;

  @Column({ type: "varchar" })
  backGround: string | undefined;

  @Column({ type: "varchar" })
  logo: string | undefined;

  @Column({ type: "json", nullable: true })
  pageOne: { title: string; to: string; color: string } | undefined;

  @Column({ type: "json", nullable: true })
  pageTwo: { title: string; to: string; color: string } | undefined;

  @Column({ type: "json", nullable: true })
  pageThree: { title: string; to: string; color: string } | undefined;

  @Column({ type: "json", nullable: true })
  pageFour: { title: string; to: string; color: string } | undefined;
}
