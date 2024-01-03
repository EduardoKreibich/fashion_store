import { z } from "zod";


export const modalEditSchema = z.object({

    name:z
    .string()
    .nonempty("O nome é obrigatório"),

    price:z
    .string()
    .nonempty("O preço é obrigatório"),
    
    description:z
    .string()
    .nonempty("A descrição é obrigatório"),

    image:z
    .string()
    .nonempty("A URL da imagem é obrigatório"),
    
})


export type TEditProduct =  z.infer<typeof modalEditSchema>
