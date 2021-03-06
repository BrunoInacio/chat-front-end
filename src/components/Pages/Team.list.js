const authors = [
  {
    'name': "Bruno Brandão Inácio",
    'photo': "https://avatars1.githubusercontent.com/u/3254614",
    'NUSP': 9838122,
    'email': "bruno.inacio@usp.br",
    'telephone': "(DDD) NNNNN-NNNN",
  },
  {
    'name': "Pedro de Moraes Ligabue",
    'photo': "https://avatars3.githubusercontent.com/u/36277911",
    'NUSP': 9837434,
    'email': "pedro.ligabue@usp.br",
    'telephone': "(DDD) NNNNN-NNNN",
  }
]

const professor = [
  {
    'name': "Dra. Anarosa Alves Franco Brandão",
    'photo': "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4728035E1",
    'NUSP': 319590
  }
]

const collaborator = [
  {
    'name': "Pedro Koch",
    'photo': "https://avatars0.githubusercontent.com/u/34276307",
    'NUSP': 9837420,
  }
]

export default [
  {
    'title': "Autores",
    'members': authors
  },
  {
    'title': "Orientadora",
    'members': professor
  },
  {
    'title': "Colaborador",
    'members': collaborator,
  }
]
