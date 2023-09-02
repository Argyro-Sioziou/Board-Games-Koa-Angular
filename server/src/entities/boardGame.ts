import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export default class BoardGameEntity {
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
}