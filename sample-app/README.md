A demo application built in React that shows real time stock market data in the form of table and graphs and subscribes to a Websocket (ws://stocks.mnet.website/) to fetch simulated stock market data.

Deployed at -> https://ashish2194.github.io/SampleDemoApp/

Features:

1. A table showing data for all the stocks

2. Each row shows:

    a. The latest stock price. (With color relative to the previous stock value)
  
    b. A sparkline showing the changes in stock values (Without considering the time factor)
  
    c. When was the specific stock last updated
  
3. Market Trend arrow indicating how stock values behaved

4. Ability to select any stocks, to be shown in the Graph

5. Graphs can show historical values wrt time for any stocks selected

5. Can zoom/pan over graph, Reset the zoom

7. Clear history of all stocks with the click of a button
