import { Project } from "@/interfaces/project.interface";

export const TRADING_ALGORITHM: Project = {
  slug: "automatic-trading-algorighm",
  title: "Automating trading Algorithm. Moby Dick",
  titleGerman: "Automatisiertes Handelssystem. Moby Dick",
  projectType: "Side Project",
  fullDescription: `<strong>Advanced cryptocurrency trading system</strong> that executed real-time strategies against Binance APIs with production-grade Google Cloud infrastructure and comprehensive monitoring.

<h3 className="text-xl"><strong>My Strategic Role</strong></h3>
- <strong>New analysis techniques development</strong>: Designed proprietary trading signal algorithms using volume analysis, multi-timeframe trends, and advanced TA indicators (Ichimoku, Bollinger, MACD)
- <strong>Cloud architecture design</strong>: Engineered serverless GCP pipeline (Cloud Tasks, BigQuery, Redis, Secret Manager) for 2-minute market analysis cycles
- <strong>Telegram integration lead</strong>: Real-time notifications system for trade entries/exits, market regime changes, and production error monitoring
- Implemented <strong>trailing-stop order strategies</strong> with dynamic risk management for live Binance trading
- Built complete <strong>BigQuery → Data Studio analytics pipeline</strong> for strategy performance tracking and hypothesis validation

<h3 className="text-xl"><strong>Challenges Solved</strong></h3>
- <strong>Emotion-free execution</strong> through fully automated 2-minute market analysis cycles covering 24/7 crypto volatility
- Binance API <strong>rate limiting + WebSocket complexity</strong> → Redis caching + intelligent data batching
- <strong>Live trading reliability</strong> for significant capital → comprehensive error recovery + Telegram alerting
- <strong>Strategy validation at scale</strong> → BigQuery backtesting + comparative hypothesis analysis
- Serverless <strong>production monitoring</strong> without 24/7 server dependency

<h3 className="text-xl"><strong>Results</strong></h3>
✅ <strong>Production trading system</strong> managing real Binance orders with trailing-stops and risk controls
✅ <strong>Complete analytics pipeline</strong>: BigQuery captured every trade/signal for Data Studio performance dashboards
✅ <strong>2-minute market analysis cycles</strong> processing volume, trends, and technical patterns continuously
✅ <strong>Real-time Telegram monitoring</strong> with entry/exit confirmations and production error resolution
✅ Enterprise-grade <strong>Google Cloud infrastructure</strong> ready for significant trading volumes`,
  fullDescriptionGerman: `<strong>Fortschrittliches Kryptowährungshandelsystem</strong> das Echtzeit-Strategien gegen Binance-APIs mit produktionsreifer Google Cloud-Infrastruktur und umfassender Überwachung ausführte.

<h3 className="text-xl"><strong>Meine strategische Rolle</strong></h3>
- <strong>Entwicklung neuer Analyse-Techniken</strong>: Design proprietärer Handelssignal-Algorithmen mit Volumenanalyse, Multi-Timeframe-Trends und fortgeschrittenen TA-Indikatoren (Ichimoku, Bollinger, MACD)
- <strong>Cloud-Architektur Design</strong>: Serverlose GCP-Pipeline (Cloud Tasks, BigQuery, Redis, Secret Manager) für 2-Minuten-Markanalyse-Zyklen entwickelt
- <strong>Telegram-Integration Lead</strong>: Echtzeit-Benachrichtigungssystem für Trade-Eingänge/Ausgänge, Marktregime-Wechsel und Produktionsfehler-Monitoring
- Implementierte <strong>Trailing-Stop-Order-Strategien</strong> mit dynamischem Risikomanagement für Live-Binance-Trading
- Komplette <strong>BigQuery → Data Studio Analytics-Pipeline</strong> für Strategie-Performance-Tracking und Hypothesenvalidierung gebaut

<h3 className="text-xl"><strong>Gelöste Herausforderungen</strong></h3>
- <strong>Emotionfreie Ausführung</strong> durch vollautomatisierte 2-Minuten-Markanalyse-Zyklen für 24/7 Krypto-Volatilität
- Binance-API <strong>Rate-Limiting + WebSocket-Komplexität</strong> → Redis-Caching + intelligente Datenbatching
- <strong>Live-Trading-Zuverlässigkeit</strong> für bedeutendes Kapital → umfassende Fehlerwiederherstellung + Telegram-Alarme
- <strong>Strategie-Validierung im großen Maßstab</strong> → BigQuery-Backtesting + vergleichende Hypothesenanalyse
- Serverlose <strong>Produktionsüberwachung</strong> ohne 24/7-Serverabhängigkeit

<h3 className="text-xl"><strong>Ergebnisse</strong></h3>
✅ <strong>Produktives Handelssystem</strong> verwaltet echte Binance-Orders mit Trailing-Stops und Risikokontrollen
✅ <strong>Komplette Analytics-Pipeline</strong>: BigQuery speicherte jeden Trade/Signal für Data Studio Performance-Dashboards
✅ <strong>2-Minuten-Markanalyse-Zyklen</strong> verarbeiteten kontinuierlich Volumen, Trends und technische Muster
✅ <strong>Echtzeit-Telegram-Überwachung</strong> mit Entry/Exit-Bestätigungen und Produktionsfehlerbehebung
✅ Enterprise-grade <strong>Google Cloud-Infrastruktur</strong> bereit für bedeutende Handelsvolumen`,
  images: ["/moby-cover.webp", "moby_architecture.webp"],
  tags: [
    "Python",
    "Flask",
    "Pandas",
    "API",
    "Telegram APIs",
    "Binance APIs",
    "Redis",
    "Matploblib",
    "Secret Manager",
    "Looker Studio",
    "BigQuery",
    "Google Tasks",
  ],
  description: `"Real-time Binance trading bot with trailing-stops, GCP infrastructure, BigQuery analytics, and Telegram monitoring`,
  descriptionGerman: `"Echtzeit-Binance-Trading-Bot mit Trailing-Stops, GCP-Infrastruktur, BigQuery-Analytics und Telegram-Monitoring`,
  videoUrl: "/demo-moby.webm",
  releaseDate: "15-02-2021",
  gitHubUrl:
    "https://github.com/franciscojgonzalezfernandez-lgtm/automatic-trading-algorithm",
};
