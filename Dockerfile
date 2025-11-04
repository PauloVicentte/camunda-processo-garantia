FROM camunda/camunda-bpm-platform:run-latest

WORKDIR /camunda

COPY ./solicitacao.garantia.aparelhos/source/process /camunda/configuration/resources/

EXPOSE 8080

CMD ["./camunda.sh"]
