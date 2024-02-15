export interface IDomain {
    data: {
        adm_nome: string,
        adm_email: string,
        adm_senha: string,
        adm_level: number
    }

    save(): Object
    search(): Array<Object>
    update(arg0: Object): Object
    login(): Object
}