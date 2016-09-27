FROM christianbladescb/locustio

COPY execute.sh /locust/
RUN chmod +x /locust/execute.sh
ENTRYPOINT [ "/locust/execute.sh" ]
