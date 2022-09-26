SELECT
id,
nome,
rg,
data_nascimento,
sexo,
num_filhos
FROM
pessoas
INNER JOIN
(SELECT  id_pessoa, COUNT(id_pessoa) AS num_filhos FROM
dependentes
WHERE parentesco = 'Filho(a)'
GROUP BY dependentes.id_pessoa) AS num_dependentes
ON num_dependentes.id_pessoa = pessoas.id
WHERE num_filhos > 1