SELECT nome, sexo, valor AS telefone, contato, tipo
FROM pessoas
FULL JOIN contatos
ON
pessoas.id = contatos.id_pessoa
WHERE
tipo = 'Fixo'
OR 
tipo = 'Celular'
OR
tipo is null;