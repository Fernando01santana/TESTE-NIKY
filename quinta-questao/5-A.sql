SELECT 
pessoas.id as id_pessoa,
nome, rg, data_nascimento,
sexo,
numero,
complemento,
cep 
FROM
pessoas
INNER JOIN
endereco
ON pessoas.id = endereco.id_pessoa;