class Food {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  nota: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    nota: number
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.nota = nota
  }
}

export default Food
