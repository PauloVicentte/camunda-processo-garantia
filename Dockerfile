FROM camunda/camunda-bpm-platform:run-latest

WORKDIR /camunda

COPY ./Solicitacao.Garantia.Aparelhos/source/process /camunda/configuration/resources/

EXPOSE 8080

CMD ["./camunda.sh"]
