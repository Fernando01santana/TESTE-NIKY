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
ON pessoas.id = endereco.id_pessoa
where 
nome is null
or rg is null
or data_nascimento is null
or sexo is null
or numero is null
or complemento is null
or cep is null;