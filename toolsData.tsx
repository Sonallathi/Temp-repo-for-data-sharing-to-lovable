import { 
  Code, MessageSquare, PencilRuler, ImageIcon, 
  Video, Music, AudioLines, Lightbulb, 
  Search, Brain, BookOpen, Database, 
  FileText, Presentation, BarChart, Bot, 
  Zap, Play, Sparkles, Globe, RefreshCcw, ChefHat
} from "lucide-react";

export type ToolCategory = 
  | 'coding' 
  | 'chat' 
  | 'design' 
  | 'image' 
  | 'video' 
  | 'music' 
  | 'audio' 
  | 'ideas' 
  | 'search' 
  | 'learning' 
  | 'research' 
  | 'writing' 
  | 'presentations' 
  | 'productivity' 
  | 'data' 
  | 'customer' 
  | 'automation' 
  | 'social' 
  | 'creativity'
  | 'web'
  | 'workflow'
  | 'cooking'
  | 'ai-assistant'
  | 'content-creation'
  | 'image-generation'
  | 'data-analysis'
  | 'seo'
  | 'legal-assistant'
  | 'translation'
  | 'content-detection'
  | 'prompt-engineering'
  | 'framework'
  | 'model-evaluation'
  | 'learning-platform'
  | 'video-editing'
  | 'music-generation'
  | 'email-assistant'
  | 'marketing'
  | 'photo-editing'
  | 'social-media'
  | 'business-intelligence';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  url: string;
  imageUrl?: string;
  pricing: 'free' | 'freemium' | 'paid' | 'subscription';
  popular?: boolean;
  keywords: string[];
}

export const categories = [
  {
    id: 'ai-assistant',
    name: 'AI Assistants',
    icon: Bot,
    description: 'AI tools that act as virtual assistants across various domains'
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    icon: FileText,
    description: 'Tools that help in generating text, audio, and video content'
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    icon: Search,
    description: 'AI tools for improving search engine rankings and content visibility'
  },
  {
    id: 'legal-assistant',
    name: 'Legal Assistant',
    icon: BookOpen,
    description: 'AI tools that support legal document analysis and compliance'
  },
  {
    id: 'translation',
    name: 'Translation',
    icon: Globe,
    description: 'AI-powered translation and multilingual support tools'
  },
  {
    id: 'content-detection',
    name: 'Content Detection',
    icon: Search,
    description: 'Tools to detect AI-generated or plagiarized content'
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    icon: Zap,
    description: 'Tools that help build and refine AI prompts'
  },
  {
    id: 'framework',
    name: 'Frameworks',
    icon: Code,
    description: 'AI and ML development frameworks and libraries'
  },
  {
    id: 'model-evaluation',
    name: 'Model Evaluation',
    icon: BarChart,
    description: 'AI tools for testing and evaluating model performance'
  },
  {
    id: 'learning-platform',
    name: 'Learning Platforms',
    icon: Brain,
    description: 'Platforms offering AI and ML educational content'
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    icon: Video,
    description: 'AI tools that enhance or automate video editing'
  },
  {
    id: 'music-generation',
    name: 'Music Generation',
    icon: Music,
    description: 'Tools that use AI to create music and compositions'
  },
  {
    id: 'email-assistant',
    name: 'Email Assistant',
    icon: MessageSquare,
    description: 'AI tools that assist with writing or managing email'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Play,
    description: 'AI platforms for marketing automation and strategy'
  },
  {
    id: 'photo-editing',
    name: 'Photo Editing',
    icon: ImageIcon,
    description: 'AI tools for enhancing and modifying photographs'
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: Play,
    description: 'AI tools to manage and grow social media presence'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    icon: BarChart,
    description: 'AI tools for insights, reporting, and dashboards'
  },
  {
    id: 'voice-cloning',
    name: 'Voice Cloning',
    icon: AudioLines,
    description: 'AI tools that replicate or synthesize voices'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: BarChart,
    description: 'AI tools for finance management, forecasting, or trading'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: Bot,
    description: 'AI tools for recruitment, onboarding, and HR support'
  },
  { 
    id: 'coding', 
    name: 'Coding', 
    icon: Code,
    description: 'Tools that assist with programming and development'
  },
  { 
    id: 'chat', 
    name: 'Chat & Assistants', 
    icon: MessageSquare,
    description: 'Conversational AI and digital assistants'
  },
  { 
    id: 'design', 
    name: 'Design & UI/UX', 
    icon: PencilRuler,
    description: 'Tools for graphic design and user interfaces'
  },
  { 
    id: 'image', 
    name: 'Image Generation', 
    icon: ImageIcon,
    description: 'Create and edit images with AI'
  },
  { 
    id: 'video', 
    name: 'Video Creation', 
    icon: Video,
    description: 'Tools for video editing and generation'
  },
  { 
    id: 'music', 
    name: 'Music Creation', 
    icon: Music,
    description: 'AI tools for composing and creating music'
  },
  { 
    id: 'audio', 
    name: 'Audio & Voice', 
    icon: AudioLines,
    description: 'Voice synthesis and audio editing tools'
  },
  { 
    id: 'ideas', 
    name: 'Idea Generation', 
    icon: Lightbulb,
    description: 'Tools to spark creativity and brainstorming'
  },
  { 
    id: 'search', 
    name: 'Search & Research', 
    icon: Search,
    description: 'Advanced search and research assistants'
  },
  { 
    id: 'learning', 
    name: 'Learning & Education', 
    icon: Brain,
    description: 'Tools to help with learning and education'
  },
  { 
    id: 'research', 
    name: 'Research & Analysis', 
    icon: BookOpen,
    description: 'AI tools for research and data analysis'
  },
  { 
    id: 'data', 
    name: 'Data & Analytics', 
    icon: Database,
    description: 'Tools for working with data and analytics'
  },
  { 
    id: 'writing', 
    name: 'Writing & Content', 
    icon: FileText,
    description: 'AI tools for writing and content creation'
  },
  { 
    id: 'presentations', 
    name: 'Presentations', 
    icon: Presentation,
    description: 'Tools for creating impressive presentations'
  },
  { 
    id: 'productivity', 
    name: 'Productivity', 
    icon: BarChart,
    description: 'Enhance productivity with AI tools'
  },
  { 
    id: 'customer', 
    name: 'Customer Service', 
    icon: Bot,
    description: 'AI tools for customer support and service'
  },
  { 
    id: 'automation', 
    name: 'Automation', 
    icon: Zap,
    description: 'Tools for automating workflows and tasks'
  },
  { 
    id: 'social', 
    name: 'Social Media', 
    icon: Play,
    description: 'AI tools for social media management'
  },
  { 
    id: 'creativity', 
    name: 'Creativity', 
    icon: Sparkles,
    description: 'Boost creativity with AI tools'
  },
  { 
    id: 'web', 
    name: 'Web Tools', 
    icon: Globe,
    description: 'AI tools for web development and design'
  },
  { 
    id: 'workflow', 
    name: 'Workflow', 
    icon: RefreshCcw,
    description: 'Improve your workflow with AI'
  },
  { 
    id: 'cooking', 
    name: 'Cooking & Recipes', 
    icon: ChefHat,
    description: 'AI tools for cooking and recipe generation'
  }
];

export const tools: Tool[] = [
  {
    id: 'google-assistant',
    name: 'Google Assistant',
    description: 'A widely used virtual assistant integrated across devices and services, capable of completing tasks, providing information, and controlling smart home devices.',
    category: 'ai-assistant',
    url: 'https://assistant.google.com/',
    pricing: 'free',
    keywords: ['virtual assistant', 'voice assistant', 'smart assistant', 'google', 'productivity']
  },
  {
    id: 'amazon-alexa',
    name: 'Amazon Alexa',
    description: 'Amazon\'s cloud-based voice service available on millions of devices, enabling voice interaction for various tasks and smart home control.',
    category: 'ai-assistant',
    url: 'https://developer.amazon.com/en-US/alexa',
    pricing: 'free',
    keywords: ['virtual assistant', 'voice assistant', 'smart assistant', 'amazon', 'alexa skills']
  },
  {
    id: 'siri',
    name: 'Siri',
    description: 'Apple\'s virtual assistant available across Apple devices, using voice queries and a natural-language user interface to operate the phone.',
    category: 'ai-assistant',
    url: 'https://www.apple.com/siri/',
    pricing: 'free',
    keywords: ['virtual assistant', 'voice assistant', 'ios', 'apple', 'productivity']
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'An AI-powered assistant integrated into Microsoft 365 and other services to help users with tasks like writing, coding, summarizing, and data analysis.',
    category: 'ai-assistant',
    url: 'https://copilot.microsoft.com/',
    pricing: 'freemium',
    keywords: ['ai assistant', 'productivity', 'microsoft 365', 'writing assistant', 'coding assistant']
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'An AI meeting assistant that transcribes conversations in real-time, generates summaries, and captures action items for meetings.',
    category: 'ai-assistant',
    url: 'https://otter.ai/',
    pricing: 'freemium',
    keywords: ['meeting assistant', 'transcription', 'voice notes', 'productivity', 'ai note-taking']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'An AI content platform designed to help marketing teams create a wide range of content formats, from blog posts to social media copy.',
    category: 'content-creation',
    url: 'https://www.jasper.ai/',
    pricing: 'subscription',
    keywords: ['ai writing assistant', 'content generation', 'copywriting', 'marketing content', 'ai platform']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'An AI-powered copy generation tool that helps businesses create marketing copy, social media content, and other written materials quickly.',
    category: 'content-creation',
    url: 'https://www.copy.ai/',
    pricing: 'freemium',
    keywords: ['ai copywriting', 'content generation', 'marketing copy', 'social media content', 'ai writer']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'An AI writing assistant that generates high-quality articles, blog posts, landing pages, and other content using AI.',
    category: 'content-creation',
    url: 'https://writesonic.com/',
    pricing: 'freemium',
    keywords: ['ai writer', 'article generator', 'blog post generator', 'content marketing', 'ai tools']
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    description: 'An SEO content optimization tool that uses AI to help create content that is optimized for search engines, focusing on keywords and structure.',
    category: 'content-creation',
    url: 'https://surferseo.com/',
    pricing: 'subscription',
    keywords: ['seo content', 'content optimization', 'ai writing', 'keyword research', 'serp analysis']
  },
  {
    id: 'canva',
    name: 'Canva',
    description: 'A graphic design platform with AI-powered features for creating visuals, including AI image generation and design suggestions, suitable for content creation.',
    category: 'content-creation',
    url: 'https://www.canva.com/',
    pricing: 'freemium',
    keywords: ['graphic design', 'ai image generator', 'visual content', 'design tool', 'social media graphics']
  },
  {
    id: 'semrush',
    name: 'Semrush',
    description: 'A comprehensive SEO platform with AI-powered tools for keyword research, rank tracking, site audits, and content optimization.',
    category: 'seo-tool',
    url: 'https://www.semrush.com/',
    pricing: 'subscription',
    keywords: ['seo analysis', 'keyword research', 'rank tracking', 'site audit', 'competitor analysis', 'ai seo']
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'A popular SEO toolset offering site explorer, keyword explorer, and content explorer features, with some AI capabilities for analysis.',
    category: 'seo-tool',
    url: 'https://ahrefs.com/',
    pricing: 'subscription',
    keywords: ['seo analysis', 'backlink checker', 'keyword research', 'content explorer', 'competitor analysis']
  },
  {
    id: 'moz',
    name: 'Moz',
    description: 'Provides SEO tools for keyword research, link building, site audits, and rank tracking, incorporating data-driven insights.',
    category: 'seo-tool',
    url: 'https://moz.com/',
    pricing: 'subscription',
    keywords: ['seo tools', 'domain authority', 'keyword research', 'site audit', 'link building']
  },
  {
    id: 'screaming-frog-seo-spider',
    name: 'Screaming Frog SEO Spider',
    description: 'A website crawler that helps perform technical SEO audits by extracting data and identifying common SEO issues.',
    category: 'seo-tool',
    url: 'https://www.screamingfrog.co.uk/seo-spider/',
    pricing: 'freemium',
    keywords: ['technical seo', 'website crawler', 'site audit', 'seo analysis', 'on-page seo']
  },
  {
    id: 'clearscope',
    name: 'Clearscope',
    description: 'An AI-powered platform focused on content optimization to improve search rankings by providing insights based on top-performing content.',
    category: 'seo-tool',
    url: 'https://www.clearscope.io/',
    pricing: 'subscription',
    keywords: ['content optimization', 'seo content', 'ai writing', 'keyword analysis', 'serp analysis']
  },
  {
    id: 'casetext',
    name: 'Casetext',
    description: 'An AI legal research platform that helps legal professionals find relevant case law, statutes, and regulations quickly using AI-powered search.',
    category: 'legal-assistant',
    url: 'https://casetext.com/',
    pricing: 'subscription',
    keywords: ['legal research', 'ai in law', 'legal tech', 'case law', 'document analysis']
  },
  {
    id: 'cocounsel',
    name: 'CoCounsel (Thomson Reuters)',
    description: 'An AI legal assistant by Thomson Reuters that performs tasks like legal research, document drafting, and summarizing legal documents.',
    category: 'legal-assistant',
    url: 'https://legal.thomsonreuters.com/blog/cocounsel-ai-legal-assistant/',
    pricing: 'subscription',
    keywords: ['legal ai', 'legal research', 'document review', 'ai drafting', 'legal tech']
  },
  {
    id: 'luminance',
    name: 'Luminance',
    description: 'An AI platform for legal document review and contract analysis, using machine learning to read and understand legal texts and identify risks.',
    category: 'legal-assistant',
    url: 'https://www.luminance.com/',
    pricing: 'subscription',
    keywords: ['document review', 'contract analysis', 'legal tech', 'due diligence', 'ai in law']
  },
  {
    id: 'legalmap',
    name: 'LegalMation',
    description: 'Focuses on automating litigation tasks, particularly the drafting of responses to written discovery requests using AI.',
    category: 'legal-assistant',
    url: 'https://legalmation.com/',
    pricing: 'subscription',
    keywords: ['litigation automation', 'legal tech', 'ai drafting', 'legal documents', 'discovery']
  },
  {
    id: 'zerofox',
    name: 'ZeroFox',
    description: 'While primarily a digital risk protection platform, it uses AI to identify and mitigate threats, which can include legal risks like brand infringement online.',
    category: 'legal-assistant',
    url: 'https://www.zerofox.com/',
    pricing: 'subscription',
    keywords: ['digital risk protection', 'brand protection', 'legal risk', 'online monitoring', 'ai security']
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description: 'An AI translation tool known for high accuracy, especially in European languages, offering text and document translation.',
    category: 'translation-tool',
    url: 'https://www.deepl.com/',
    pricing: 'freemium',
    keywords: ['neural machine translation', 'text translation', 'document translation', 'language ai', 'accuracy']
  },
  {
    id: 'google-translate',
    name: 'Google Translate',
    description: 'A widely used AI translation service providing text, voice, image, and website translation across many languages.',
    category: 'translation-tool',
    url: 'https://translate.google.com/',
    pricing: 'free',
    keywords: ['machine translation', 'text translation', 'voice translation', 'image translation', 'website translation', 'free translation']
  },
  {
    id: 'amazon-translate',
    name: 'Amazon Translate',
    description: 'A neural machine translation service by AWS for developers to integrate high-quality translation into applications.',
    category: 'translation-tool',
    url: 'https://aws.amazon.com/translate/',
    pricing: 'paid',
    keywords: ['api translation', 'machine translation', 'developer tool', 'aws', 'neural translation']
  },
  {
    id: 'microsoft-translator',
    name: 'Microsoft Translator',
    description: 'Provides AI-powered translation for text, voice, and images, integrated across Microsoft products and available as a service.',
    category: 'translation-tool',
    url: 'https://translator.microsoft.com/',
    pricing: 'freemium',
    keywords: ['machine translation', 'text translation', 'api translation', 'microsoft', 'bing']
  },
  {
    id: 'smartling',
    name: 'Smartling',
    description: 'An enterprise-grade translation management platform leveraging AI for efficient and scalable localization workflows.',
    category: 'translation-tool',
    url: 'https://www.smartling.com/',
    pricing: 'subscription',
    keywords: ['translation management', 'machine translation', 'localization', 'enterprise translation', 'ai translation']
  },
  {
    id: 'originality-ai',
    name: 'Originality.ai',
    description: 'An AI content detection tool known for high accuracy in identifying AI-generated text, often used by content professionals and educators.',
    category: 'content-detection',
    url: 'https://originality.ai/',
    pricing: 'paid',
    keywords: ['ai writing detection', 'ai content checker', 'plagiarism checker', 'seo content', 'content authenticity']
  },
  {
    id: 'gptzero',
    name: 'GPTZero',
    description: 'A popular AI detection tool designed to determine if text was written by a human or an AI model like ChatGPT, used frequently in education.',
    category: 'content-detection',
    url: 'https://gptzero.me/',
    pricing: 'freemium',
    keywords: ['ai text detection', 'ai checker', 'education', 'academic integrity', 'ai writing']
  },
  {
    id: 'zerogpt',
    name: 'ZeroGPT',
    description: 'A free online AI content detector that quickly analyzes text and provides a percentage indicating the likelihood of AI generation.',
    category: 'content-detection',
    url: 'https://www.zerogpt.com/',
    pricing: 'freemium',
    keywords: ['free ai detector', 'ai checker', 'ai content analysis', 'text analysis']
  },
  {
    id: 'copyleaks',
    name: 'Copyleaks',
    description: 'Offers AI content detection and plagiarism checking solutions, widely used by businesses and educational institutions.',
    category: 'content-detection',
    url: 'https://copyleaks.com/ai-content-detector',
    pricing: 'subscription',
    keywords: ['ai content detector', 'plagiarism checker', 'ai writing detection', 'multilingual', 'education']
  },
  {
    id: 'quillbot-ai-detector',
    name: 'QuillBot AI Detector',
    description: 'Part of QuillBot\'s writing suite, this tool detects AI-generated and AI-refined content in text.',
    category: 'content-detection',
    url: 'https://quillbot.com/ai-content-detector',
    pricing: 'freemium',
    keywords: ['ai checker', 'ai writing detection', 'paraphrasing tool integration', 'content analysis']
  },
  {
    id: 'promptperfect',
    name: 'PromptPerfect',
    description: 'An AI-powered tool that optimizes and rewrites prompts to yield more accurate and desirable results from AI models.',
    category: 'prompt-engineering',
    url: 'https://promptperfect.jina.ai/',
    pricing: 'freemium',
    keywords: ['prompt optimization', 'ai prompt generator', 'prompt refinement', 'ai models', 'text generation']
  },
  {
    id: 'promptlayer',
    name: 'PromptLayer',
    description: 'A platform for logging, managing, and evaluating prompts for large language models, aiding teams in prompt engineering and observability.',
    category: 'prompt-engineering',
    url: 'https://www.promptlayer.com/',
    pricing: 'subscription',
    keywords: ['prompt management', 'prompt testing', 'prompt evaluation', 'llm observability', 'api monitoring']
  },
  {
    id: 'prompthub',
    name: 'PromptHub',
    description: 'A collaboration platform for teams to discover, manage, version, and test AI prompts.',
    category: 'prompt-engineering',
    url: 'https://www.prompthub.us/',
    pricing: 'freemium',
    keywords: ['prompt management', 'prompt versioning', 'prompt collaboration', 'prompt testing', 'ai community']
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'An open-source framework for developing applications powered by language models, providing tools for prompt management and chaining.',
    category: 'prompt-engineering',
    url: 'https://www.langchain.com/',
    pricing: 'free',
    keywords: ['llm framework', 'prompt chaining', 'application development', 'open source', 'ai development']
  },
  {
    id: 'openai-playground',
    name: 'OpenAI Playground',
    description: 'An interactive web interface provided by OpenAI to experiment with and test prompts for their language models.',
    category: 'prompt-engineering',
    url: 'https://platform.openai.com/playground',
    pricing: 'paid',
    keywords: ['prompt testing', 'ai model interaction', 'openai', 'llm experimentation', 'api interface']
  },
  {
    id: 'mlflow',
    name: 'MLflow',
    description: 'An open-source platform to manage the ML lifecycle, including tracking experiments, logging parameters, and evaluating models.',
    category: 'model-evaluation',
    url: 'https://mlflow.org/',
    pricing: 'free',
    keywords: ['mlops', 'experiment tracking', 'model tracking', 'performance metrics', 'ml lifecycle', 'open source']
  },
  {
    id: 'deepchecks',
    name: 'Deepchecks',
    description: 'An open-source library and platform for testing and validating ML models and data, ensuring performance, integrity, and lack of bias.',
    category: 'model-evaluation',
    url: 'https://docs.deepchecks.com/stable/',
    pricing: 'freemium',
    keywords: ['ml validation', 'model testing', 'data validation', 'bias detection', 'model monitoring', 'open source']
  },
  {
    id: 'arize-ai',
    name: 'Arize AI',
    description: 'An MLOps observability platform for monitoring and troubleshooting ML models in production, detecting performance degradation and data drift.',
    category: 'model-evaluation',
    url: 'https://www.arize.com/',
    pricing: 'subscription',
    keywords: ['ml monitoring', 'ml observability', 'performance monitoring', 'data drift', 'bias detection', 'production ml']
  },
  {
    id: 'evidently-ai',
    name: 'Evidently AI',
    description: 'An open-source Python library for ML model evaluation, monitoring, and, analyzing data drift and model performance.',
    category: 'model-evaluation',
    url: 'https://www.evidentlyai.com/',
    pricing: 'free',
    keywords: ['ml monitoring', 'data drift', 'model performance', 'data analysis', 'open source', 'python']
  },
  {
    id: 'ibm-ai-fairness-360',
    name: 'IBM AI Fairness 360',
    description: 'An open-source toolkit providing metrics and algorithms to detect and mitigate bias in AI models.',
    category: 'model-evaluation',
    url: 'http://aif360.mybluemix.net/',
    pricing: 'free',
    keywords: ['ai fairness', 'bias detection', 'bias mitigation', 'explainability', 'open source', 'ibm']
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'A widely adopted open-source library for numerical computation and large-scale machine learning, particularly deep learning.',
    category: 'framework',
    url: 'https://www.tensorflow.org/',
    pricing: 'free',
    keywords: ['deep learning', 'machine learning', 'neural networks', 'open source', 'google', 'ai development']
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    description: 'A popular open-source machine learning library known for its flexibility and ease of use, favored by researchers and increasingly used in production.',
    category: 'framework',
    url: 'https://pytorch.org/',
    pricing: 'free',
    keywords: ['deep learning', 'machine learning', 'neural networks', 'open source', 'meta ai', 'research']
  },
  {
    id: 'keras',
    name: 'Keras',
    description: 'A high-level neural networks API that runs on top of other frameworks like TensorFlow, PyTorch, and JAX, known for its user-friendliness and rapid prototyping capabilities.',
    category: 'framework',
    url: 'https://keras.io/',
    pricing: 'free',
    keywords: ['deep learning', 'neural networks', 'api', 'python', 'user-friendly', 'prototyping']
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    description: 'A widely used open-source library for traditional machine learning tasks, data mining, and data analysis.',
    category: 'framework',
    url: 'https://scikit-learn.org/',
    pricing: 'free',
    keywords: ['machine learning', 'data mining', 'data analysis', 'open source', 'python', 'traditional ml']
  },
  {
    id: 'google-cloud-vertex-ai',
    name: 'Google Cloud Vertex AI',
    description: 'A managed, unified AI development platform on Google Cloud that supports building, training, and deploying models using various frameworks.',
    category: 'framework',
    url: 'https://cloud.google.com/vertex-ai',
    pricing: 'paid',
    keywords: ['ai platform', 'mlops', 'model training', 'model deployment', 'google cloud', 'generative ai']
  },
  {
    id: 'mlflow',
    name: 'MLflow',
    description: 'An open-source platform to manage the ML lifecycle, including tracking experiments, logging parameters, and evaluating models.',
    category: 'model-evaluation',
    url: 'https://mlflow.org/',
    pricing: 'free',
    keywords: ['mlops', 'experiment tracking', 'model tracking', 'performance metrics', 'ml lifecycle', 'open source']
  },
  {
    id: 'deepchecks',
    name: 'Deepchecks',
    description: 'An open-source library and platform for testing and validating ML models and data, ensuring performance, integrity, and lack of bias.',
    category: 'model-evaluation',
    url: 'https://docs.deepchecks.com/stable/',
    pricing: 'freemium',
    keywords: ['ml validation', 'model testing', 'data validation', 'bias detection', 'model monitoring', 'open source']
  },
  {
    id: 'arize-ai',
    name: 'Arize AI',
    description: 'An MLOps observability platform for monitoring and troubleshooting ML models in production, detecting performance degradation and data drift.',
    category: 'model-evaluation',
    url: 'https://www.arize.com/',
    pricing: 'subscription',
    keywords: ['ml monitoring', 'ml observability', 'performance monitoring', 'data drift', 'bias detection', 'production ml']
  },
  {
    id: 'evidently-ai',
    name: 'Evidently AI',
    description: 'An open-source Python library for ML model evaluation, monitoring, and, analyzing data drift and model performance.',
    category: 'model-evaluation',
    url: 'https://www.evidentlyai.com/',
    pricing: 'free',
    keywords: ['ml monitoring', 'data drift', 'model performance', 'data analysis', 'open source', 'python']
  },
  {
    id: 'ibm-ai-fairness-360',
    name: 'IBM AI Fairness 360',
    description: 'An open-source toolkit providing metrics and algorithms to detect and mitigate bias in AI models.',
    category: 'model-evaluation',
    url: 'http://aif360.mybluemix.net/',
    pricing: 'free',
    keywords: ['ai fairness', 'bias detection', 'bias mitigation', 'explainability', 'open source', 'ibm']
  },
  {
    id: 'coursera',
    name: 'Coursera',
    description: 'An online learning platform offering a wide range of courses, specializations, and degrees in AI, ML, and Data Science from top universities.',
    category: 'learning-platform',
    url: 'https://www.coursera.org/',
    pricing: 'freemium',
    keywords: ['online courses', 'machine learning', 'deep learning', 'data science', 'ai education', 'certificates', 'specializations']
  },
  {
    id: 'edx',
    name: 'edX',
    description: 'A prominent online learning platform offering courses and programs in AI, ML, and related fields from universities worldwide.',
    category: 'learning-platform',
    url: 'https://www.edx.org/',
    pricing: 'freemium',
    keywords: ['online courses', 'artificial intelligence', 'machine learning', 'data science', 'certificates', 'programs', 'university courses']
  },
  {
    id: 'udemy',
    name: 'Udemy',
    description: 'An online learning marketplace featuring a vast library of courses on AI, ML, Data Science, and various tech topics, often taught by industry experts.',
    category: 'learning-platform',
    url: 'https://www.udemy.com/',
    pricing: 'paid',
    keywords: ['online courses', 'machine learning', 'artificial intelligence', 'data science', 'online marketplace', 'tutorials']
  },
  {
    id: 'google-ai-education',
    name: 'Google AI Education',
    description: 'A collection of resources and courses provided by Google to help developers and students learn about AI and Machine Learning, including the ML Crash Course.',
    category: 'learning-platform',
    url: 'https://developers.google.com/machine-learning/crash-course',
    pricing: 'free',
    keywords: ['ai education', 'machine learning', 'free courses', 'tutorials', 'google', 'tensorflow']
  },
  {
    id: 'datacamp',
    name: 'DataCamp',
    description: 'An online platform focused on data skills, offering interactive courses and exercises in data science, machine learning, and AI.',
    category: 'learning-platform',
    url: 'https://www.datacamp.com/',
    pricing: 'freemium',
    keywords: ['data science', 'machine learning', 'r programming', 'python', 'sql', 'interactive learning']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'An AI video generation platform that allows users to create videos with realistic AI avatars and voiceovers from simple text inputs.',
    category: 'video-editing',
    url: 'https://www.synthesia.io/',
    pricing: 'subscription',
    keywords: ['ai video generation', 'ai avatars', 'text-to-video', 'corporate video', 'explainer videos', 'ai voiceover']
  },
  {
    id: 'runway',
    name: 'Runway',
    description: 'An AI creative platform offering tools for generative video (text-to-video, image-to-video) and AI-powered editing features like background removal.',
    category: 'video-editing',
    url: 'https://runwayml.com/',
    pricing: 'freemium',
    keywords: ['ai video generator', 'generative ai', 'text-to-video', 'image-to-video', 'video effects', 'creative tools']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'An audio and video editor that allows editing by modifying the text transcript, with integrated AI features like transcription and filler word removal.',
    category: 'video-editing',
    url: 'https://www.descript.com/',
    pricing: 'freemium',
    keywords: ['video editor', 'audio editor', 'transcription', 'ai editing', 'podcast editing', 'filler word removal']
  },
  {
    id: 'invideo-ai',
    name: 'InVideo AI',
    description: 'An online AI video generator that transforms text prompts, scripts, or URLs into complete videos with AI-generated visuals, voiceovers, and music.',
    category: 'video-editing',
    url: 'https://invideo.io/make/ai-video-editor',
    pricing: 'freemium',
    keywords: ['ai video generator', 'text-to-video', 'video automation', 'online video editor', 'content creation']
  },
  {
    id: 'capcut',
    name: 'CapCut',
    description: 'A free and popular video editing app (mobile and desktop) with user-friendly tools and integrated AI features for tasks like auto-captioning and background removal.',
    category: 'video-editing',
    url: 'https://www.capcut.com/',
    pricing: 'freemium',
    keywords: ['video editor', 'mobile app', 'desktop app', 'free video editing', 'auto captions', 'background removal']
  },
  {
    id: 'suno-ai',
    name: 'Suno AI',
    description: 'An AI music generator capable of creating full songs with vocals and instrumentals from simple text descriptions or lyrics.',
    category: 'music-generation',
    url: 'https://suno.com/',
    pricing: 'freemium',
    keywords: ['ai song generator', 'text-to-music', 'ai vocals', 'ai instrumentals', 'full song generation']
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'An AI platform that generates music and vocals from text prompts, offering creative control and the ability to extend audio tracks.',
    category: 'music-generation',
    url: 'https://www.udio.com/',
    pricing: 'freemium',
    keywords: ['ai music generator', 'text-to-music', 'ai vocals', 'audio-to-audio', 'song creation']
  },
  {
    id: 'aiva',
    name: 'AIVA',
    description: 'An AI music composition assistant that helps users create emotional soundtracks and background music in over 250 styles.',
    category: 'music-generation',
    url: 'https://www.aiva.ai/',
    pricing: 'freemium',
    keywords: ['ai music composition', 'soundtrack generation', 'background music', 'instrumental music', 'ai assistant']
  },
  {
    id: 'mubert',
    name: 'Mubert',
    description: 'Generates royalty-free AI music streams and tracks for content creators, tailored to mood, genre, and activity.',
    category: 'music-generation',
    url: 'https://mubert.com/',
    pricing: 'freemium',
    keywords: ['royalty-free music', 'ai music stream', 'background music', 'content creation', 'mood-based music']
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'Provides a library of royalty-free AI-generated music tracks that can be customized by mood, genre, and length for videos and content.',
    category: 'music-generation',
    url: 'https://soundraw.io/',
    pricing: 'subscription',
    keywords: ['royalty-free music', 'background music', 'video music', 'mood selection', 'music library']
  },
  {
    id: 'microsoft-copilot-email',
    name: 'Microsoft Copilot (Email)',
    description: 'An AI assistant integrated into Microsoft 365 and Outlook, helping with email drafting, summarization, and managing your inbox.',
    category: 'email-assistant',
    url: 'https://copilot.microsoft.com/microsoft-365',
    pricing: 'subscription',
    keywords: ['ai assistant', 'outlook', 'microsoft 365', 'email drafting', 'email summarization', 'productivity']
  },
  {
    id: 'gemini-gmail',
    name: 'Gemini for Gmail',
    description: 'Google\'s AI assistant integrated into Gmail (Google Workspace) to assist with writing, replying to, summarizing, and prioritizing emails.',
    category: 'email-assistant',
    url: 'https://workspace.google.com/ायलgemini/',
    pricing: 'subscription',
    keywords: ['ai assistant', 'gmail', 'google workspace', 'email drafting', 'email summarization', 'productivity']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'An AI-powered writing assistant that helps compose, refine, and proofread emails for clarity, tone, and correctness.',
    category: 'email-assistant',
    url: 'https://www.grammarly.com/',
    pricing: 'freemium',
    keywords: ['writing assistant', 'grammar checker', 'email writing', 'ai writing', 'productivity']
  },
  {
    id: 'flowrite',
    name: 'Flowrite',
    description: 'An AI tool that transforms short instructions into ready-to-send emails and messages, automating the writing process.',
    category: 'email-assistant',
    url: 'https://flowrite.com/',
    pricing: 'subscription',
    keywords: ['ai writing', 'email automation', 'writing assistant', 'productivity', 'email drafting']
  },
  {
    id: 'sanebox',
    name: 'SaneBox',
    description: 'An AI email management service that intelligently filters, prioritizes, and summarizes emails to help achieve inbox zero.',
    category: 'email-assistant',
    url: 'https://www.sanebox.com/',
    pricing: 'subscription',
    keywords: ['email management', 'inbox organization', 'ai sorting', 'email prioritization', 'productivity', 'email summarization']
  },
  {
    id: 'hubspot-ai',
    name: 'HubSpot AI',
    description: 'AI-powered features integrated across the HubSpot CRM platform to assist with content creation, data analysis, and automating marketing tasks.',
    category: 'marketing',
    url: 'https://www.hubspot.com/campaign-assistant/ai-for-marketing',
    pricing: 'subscription',
    keywords: ['marketing automation', 'crm', 'content creation', 'email marketing', 'sales', 'service', 'ai marketing']
  },
  {
    id: 'jasper-marketing',
    name: 'Jasper',
    description: 'An AI co-pilot for marketing teams to quickly generate and repurpose content for various channels while maintaining brand consistency.',
    category: 'marketing',
    url: 'https://www.jasper.ai/',
    pricing: 'subscription',
    keywords: ['ai writing assistant', 'content creation', 'copywriting', 'marketing content', 'ai platform']
  },
  {
    id: 'semrush-marketing',
    name: 'Semrush',
    description: 'A leading SEO and online visibility management platform with AI-powered tools for keyword research, content optimization, and competitive analysis in marketing.',
    category: 'marketing',
    url: 'https://www.semrush.com/',
    pricing: 'subscription',
    keywords: ['seo', 'digital marketing', 'keyword research', 'content marketing', 'competitor analysis', 'ppc', 'ai seo']
  },
  {
    id: 'salesforce-marketingcloud',
    name: 'Salesforce Marketing Cloud',
    description: 'An AI-powered marketing automation and analytics platform that enables personalized customer journeys and optimizes campaigns using AI.',
    category: 'marketing',
    url: 'https://www.salesforce.com/products/marketing-cloud/overview/',
    pricing: 'subscription',
    keywords: ['marketing automation', 'crm', 'customer journeys', 'personalization', 'analytics', 'enterprise marketing', 'salesforce einstein']
  },
  {
    id: 'google-ads-ai',
    name: 'Google Ads (AI features)',
    description: 'Google\'s online advertising platform that extensively uses AI and machine learning for ad targeting, bidding optimization, and creative suggestions to maximize campaign performance.',
    category: 'marketing',
    url: 'https://ads.google.com/',
    pricing: 'paid',
    keywords: ['online advertising', 'ppc', 'search advertising', 'display advertising', 'advertising optimization', 'google ai']
  },
  {
    id: 'adobe-photoshop-ai',
    name: 'Adobe Photoshop (AI features)',
    description: 'A professional image editing standard with integrated AI features like Generative Fill for powerful manipulations and retouching.',
    category: 'photo-editing',
    url: 'https://www.adobe.com/products/photoshop.html',
    pricing: 'subscription',
    keywords: ['professional photo editing', 'generative fill', 'background removal', 'image manipulation', 'adobe firefly']
  },
  {
    id: 'luminar-neo',
    name: 'Luminar Neo',
    description: 'An AI-driven photo editor designed to simplify complex editing with tools for automatic sky replacement, portrait enhancement, and relighting.',
    category: 'photo-editing',
    url: 'https://skylum.com/luminar-neo',
    pricing: 'paid',
    keywords: ['ai photo editor', 'photo enhancement', 'portrait retouching', 'landscape editing', 'photography software']
  },
  {
    id: 'picsart',
    name: 'Picsart',
    description: 'A widely used online and mobile editor offering a broad suite of AI tools for quick edits, including background removal, object removal, and AI image generation.',
    category: 'photo-editing',
    url: 'https://picsart.com/',
    pricing: 'freemium',
    keywords: ['online photo editor', 'mobile photo editor', 'background remover', 'object remover', 'image enhancement', 'ai image generator']
  },
  {
    id: 'fotor-ai',
    name: 'Fotor (AI features)',
    description: 'An online photo editor providing a variety of AI tools for enhancing photos, removing objects and backgrounds, and generating images from text.',
    category: 'photo-editing',
    url: 'https://www.fotor.com/ai-photo-editor/',
    pricing: 'freemium',
    keywords: ['online photo editor', 'ai photo enhancement', 'object removal', 'background removal', 'ai image generator']
  },
  {
    id: 'topaz-labs',
    name: 'Topaz Labs',
    description: 'Offers specialized AI desktop applications for enhancing image quality, focusing on noise reduction, sharpening, and upscaling photographs.',
    category: 'photo-editing',
    url: 'https://www.topazlabs.com/',
    pricing: 'paid',
    keywords: ['ai image quality', 'denoise', 'sharpen', 'upscale', 'photo enhancement', 'desktop software']
  },
  {
    id: 'buffer-ai',
    name: 'Buffer (AI features)',
    description: 'A social media management platform with an integrated AI Assistant to help brainstorm ideas, create content, and optimize posts for various platforms.',
    category: 'social-media',
    url: 'https://buffer.com/ai-assistant',
    pricing: 'freemium',
    keywords: ['social media management', 'ai assistant', 'content creation', 'scheduling', 'social media marketing']
  },
  {
    id: 'hootsuite-ai',
    name: 'Hootsuite (AI features)',
    description: 'A comprehensive social media management platform featuring AI tools like OwlyWriter AI for generating captions, content ideas, and hashtags.',
    category: 'social-media',
    url: 'https://www.hootsuite.com/platform/owly-writer-ai',
    pricing: 'subscription',
    keywords: ['social media management', 'ai writing', 'content ideation', 'scheduling', 'social media analytics']
  },
  {
    id: 'socialbee-ai',
    name: 'SocialBee (AI features)',
    description: 'An AI-powered social media tool that assists with content creation (captions, images), scheduling, and provides an AI Copilot for personalized recommendations.',
    category: 'social-media',
    url: 'https://socialbee.com/ai-post-generator/',
    pricing: 'subscription',
    keywords: ['social media content', 'ai writing', 'scheduling', 'social media automation', 'content creation']
  },
  {
    id: 'ocoya-ai',
    name: 'Ocoya',
    description: 'An AI social media management tool that generates text, image, and video content, schedules posts, and provides analytics across multiple platforms.',
    category: 'social-media',
    url: 'https://www.ocoya.com/',
    pricing: 'subscription',
    keywords: ['social media management', 'content creation', 'ai writing', 'ai images', 'ai video', 'scheduling', 'analytics']
  },
  {
    id: 'predis-ai',
    name: 'Predis.ai',
    description: 'Uses AI to generate creative social media posts and ads, analyze competitors, and predict post performance based on brand details.',
    category: 'social-media',
    url: 'https://predis.ai/',
    pricing: 'freemium',
    keywords: ['social media content', 'ai ads', 'competitor analysis', 'content prediction', 'ai creative']
  },
  {
    id: 'microsoft-power-bi-ai',
    name: 'Microsoft Power BI (AI features)',
    description: 'A leading business intelligence platform with integrated AI capabilities for data analysis, visualization, natural language querying, and automated insights.',
    category: 'business-intelligence',
    url: 'https://powerbi.microsoft.com/',
    pricing: 'subscription',
    keywords: ['business intelligence', 'data analysis', 'data visualization', 'ai insights', 'natural language query', 'microsoft', 'analytics']
  },
  {
    id: 'tableau-ai',
    name: 'Tableau (AI features)',
    description: 'A powerful data visualization and analytics platform enhanced by Salesforce Einstein AI for predictive analytics, data explanations, and automated insights.',
    category: 'business-intelligence',
    url: 'https://www.tableau.com/',
    pricing: 'subscription',
    keywords: ['business intelligence', 'data visualization', 'predictive analytics', 'ai analytics', 'salesforce einstein', 'analytics']
  },
  {
    id: 'zoho-analytics-ai',
    name: 'Zoho Analytics (AI features)',
    description: 'A self-service BI and analytics platform with an AI assistant (Zia) for natural language querying, automated data preparation, and predictive analytics.',
    category: 'business-intelligence',
    url: 'https://www.zoho.com/analytics/',
    pricing: 'freemium',
    keywords: ['business intelligence', 'self-service bi', 'natural language query', 'predictive analytics', 'automated insights', 'zia', 'analytics']
  },
  {
    id: 'thoughtspot',
    name: 'ThoughtSpot',
    description: 'An AI-powered analytics platform that allows users to find data insights through natural language search and receive automated insights (SpotIQ).',
    category: 'business-intelligence',
    url: 'https://www.thoughtspot.com/',
    pricing: 'subscription',
    keywords: ['business intelligence', 'search analytics', 'natural language query', 'ai insights', 'self-service bi', 'analytics']
  },
  {
    id: 'looker-google-cloud',
    name: 'Looker (Google Cloud)',
    description: 'A BI and analytics platform on Google Cloud with a robust semantic layer and AI features (Gemini in Looker) for conversational analytics and insight generation.',
    category: 'business-intelligence',
    url: 'https://cloud.google.com/looker',
    pricing: 'subscription',
    keywords: ['business intelligence', 'google cloud', 'semantic modeling', 'ai analytics', 'conversational bi', 'data analysis', 'analytics']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'A leading AI voice technology company offering highly realistic text-to-speech and voice cloning capabilities with support for numerous languages.',
    category: 'voice-cloning',
    url: 'https://elevenlabs.io/',
    pricing: 'freemium',
    keywords: ['ai voice', 'voice cloning', 'text to speech', 'speech synthesis', 'realistic voice', 'audio generation']
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'An AI voice generator and cloning tool offering studio-quality voiceovers for various applications, allowing users to create and edit synthetic voices.',
    category: 'voice-cloning',
    url: 'https://murf.ai/',
    pricing: 'freemium',
    keywords: ['ai voice generator', 'voice cloning', 'text to speech', 'voiceovers', 'synthetic voice', 'audio production']
  },
  {
    id: 'playht',
    name: 'PlayHT',
    description: 'Provides realistic AI voice cloning and text-to-speech with a large library of voices and languages, suitable for content creation and narration.',
    category: 'voice-cloning',
    url: 'https://play.ht/',
    pricing: 'freemium',
    keywords: ['ai voice', 'voice cloning', 'text to speech', 'narration', 'audio content', 'synthetic voice']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: 'Focuses on creating human-like, emotional AI voices and offers fast voice cloning from small audio samples for various media.',
    category: 'voice-cloning',
    url: 'https://www.resemble.ai/',
    pricing: 'subscription',
    keywords: ['ai voice', 'voice cloning', 'realistic voice', 'emotional voice', 'audio production', 'synthetic voice']
  },
  {
    id: 'descript-overdub',
    name: 'Descript (Overdub)',
    description: 'Integrated voice cloning feature within the Descript audio/video editor, allowing users to create a synthetic version of their voice for editing and generating new audio.',
    category: 'voice-cloning',
    url: 'https://www.descript.com/overdub',
    pricing: 'subscription',
    keywords: ['ai voice', 'voice cloning', 'audio editing', 'video editing', 'synthetic voice', 'content creation']
  },
  {
    id: 'alphasense',
    name: 'AlphaSense',
    description: 'An AI-powered market intelligence platform for financial analysis and research, extracting insights from a vast universe of documents.',
    category: 'finance',
    url: 'https://www.alpha-sense.com/',
    pricing: 'subscription',
    keywords: ['financial analysis', 'market intelligence', 'investment research', 'ai search', 'sentiment analysis']
  },
  {
    id: 'zest-ai',
    name: 'Zest AI',
    description: 'Applies AI to make credit underwriting more accurate, explainable, and equitable for lenders and borrowers.',
    category: 'finance',
    url: 'https://www.zest.ai/',
    pricing: 'enterprise',
    keywords: ['credit scoring', 'lending', 'risk management', 'ai in finance', 'underwriting', 'financial inclusion']
  },
  {
    id: 'quantivate',
    name: 'Quantivate',
    description: 'Provides AI-enhanced governance, risk, and compliance (GRC) solutions for financial institutions to manage and mitigate risks.',
    category: 'finance',
    url: 'https://www.quantivate.com/',
    pricing: 'enterprise',
    keywords: ['financial risk management', 'compliance', 'grc', 'ai in finance', 'risk assessment', 'regulatory technology']
  },
  {
    id: 'trade-ideas',
    name: 'Trade Ideas',
    description: 'An AI-driven stock trading platform that uses AI to scan the market and identify potential trading opportunities in real-time.',
    category: 'finance',
    url: 'https://www.tradeideas.com/',
    pricing: 'subscription',
    keywords: ['stock trading', 'algorithmic trading', 'financial analysis', 'ai trading', 'market scanner', 'investment']
  },
  {
    id: 'zoho-analytics-finance',
    name: 'Zoho Analytics (Finance Analysis)',
    description: 'Leverages AI (Zia) for financial data analysis, reporting, and forecasting, enabling finance professionals to derive insights from their data.',
    category: 'finance',
    url: 'https://www.zoho.com/analytics/financial-reporting.html',
    pricing: 'freemium',
    keywords: ['financial analysis', 'data analysis', 'reporting', 'forecasting', 'business intelligence', 'ai analytics']
  },
  {
    id: 'workday-ai',
    name: 'Workday (AI features)',
    description: 'An enterprise cloud-based HR and finance platform with AI integrated across talent management, workforce planning, and HR automation.',
    category: 'human-resources',
    url: 'https://www.workday.com/en-us/products/human-capital-management/overview.html',
    pricing: 'enterprise',
    keywords: ['hr software', 'hcm', 'talent management', 'workforce planning', 'hr automation', 'enterprise hr', 'ai in hr']
  },
  {
    id: 'hirevue',
    name: 'HireVue',
    description: 'An AI-powered hiring platform that uses video interviews and assessments to help companies screen and evaluate candidates more efficiently.',
    category: 'human-resources',
    url: 'https://www.hirevue.com/',
    pricing: 'subscription',
    keywords: ['recruiting', 'hiring', 'candidate screening', 'video interviews', 'ai assessments', 'talent acquisition']
  },
  {
    id: 'leena-ai',
    name: 'Leena AI',
    description: 'An AI-powered employee experience platform providing chatbots, knowledge management, and sentiment analysis to improve employee engagement and support.',
    category: 'human-resources',
    url: 'https://leena.ai/',
    pricing: 'subscription',
    keywords: ['employee experience', 'hr chatbot', 'employee engagement', 'sentiment analysis', 'hr automation', 'internal communications']
  },
  {
    id: 'visier',
    name: 'Visier',
    description: 'A leader in AI-driven workforce analytics and planning, providing insights into employee retention, diversity, performance, and future talent needs.',
    category: 'human-resources',
    url: 'https://www.visier.com/',
    pricing: 'subscription',
    keywords: ['workforce analytics', 'hr analytics', 'predictive hr', 'employee retention', 'talent analytics', 'workforce planning']
  },
  {
    id: 'textio',
    name: 'Textio',
    description: 'Uses AI to analyze and improve the language of job descriptions and other recruitment content to attract more diverse candidates and reduce bias.',
    category: 'human-resources',
    url: 'https://textio.com/',
    pricing: 'subscription',
    keywords: ['recruitment marketing', 'bias reduction', 'inclusive language', 'job descriptions', 'employer branding', 'diversity and inclusion']
  },
  // Chat & Assistants
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Conversational AI chatbot developed by OpenAI that can understand and generate human-like text.',
    category: 'chat',
    url: 'https://chat.openai.com',
    pricing: 'freemium',
    popular: true,
    keywords: ['conversation', 'assistant', 'chat', 'text', 'openai', 'gpt-4', 'gpt-3']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: "Anthropic's AI assistant designed to be helpful, harmless, and honest.",
    category: 'chat',
    url: 'https://claude.ai',
    pricing: 'freemium',
    popular: true,
    keywords: ['chat', 'assistant', 'anthropic', 'conversation', 'ai']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: "Google's most capable AI model for text, code, images, and more.",
    category: 'chat',
    url: 'https://gemini.google.com',
    pricing: 'freemium',
    popular: true,
    keywords: ['google', 'chat', 'assistant', 'multimodal', 'bard']
  },
  {
    id: 'pi',
    name: 'Pi',
    description: 'Personal AI assistant that aims to be helpful, harmless, and honest with a focus on personalization.',
    category: 'chat',
    url: 'https://heypi.com',
    pricing: 'freemium',
    keywords: ['personal', 'assistant', 'chat', 'personalized', 'conversation']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered search engine that provides comprehensive answers with citations.',
    category: 'chat',
    url: 'https://www.perplexity.ai',
    pricing: 'freemium',
    popular: true,
    keywords: ['search', 'research', 'answers', 'knowledge', 'ai']
  },
  
  // Image Generation
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator that creates images from text descriptions.',
    category: 'image',
    url: 'https://www.midjourney.com',
    pricing: 'paid',
    popular: true,
    keywords: ['image', 'art', 'generation', 'creative', 'design']
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'Creates images from text captions for a wide range of concepts.',
    category: 'image',
    url: 'https://labs.openai.com',
    pricing: 'paid',
    popular: true,
    keywords: ['image', 'openai', 'art', 'generation', 'creative']
  },
  {
    id: 'stability-ai',
    name: 'Stability AI',
    description: 'Company behind Stable Diffusion, offering various image generation tools.',
    category: 'image',
    url: 'https://stability.ai',
    pricing: 'freemium',
    keywords: ['image', 'generation', 'stable diffusion', 'creative', 'open source']
  },
  {
    id: 'lensa',
    name: 'Lensa',
    description: 'Photo editing app with AI-powered features for perfect selfies and portraits.',
    category: 'image',
    url: 'https://prisma-ai.com/lensa',
    pricing: 'freemium',
    keywords: ['photo', 'editing', 'portraits', 'selfie', 'enhancement']
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.AI',
    description: 'AI-powered platform for creating stunning visual content with fine control over the output.',
    category: 'image',
    url: 'https://leonardo.ai',
    pricing: 'freemium',
    keywords: ['image', 'generation', 'art', 'design', 'creative']
  },
  
  // Coding
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code by suggesting whole lines or blocks of code.',
    category: 'coding',
    url: 'https://github.com/features/copilot',
    pricing: 'subscription',
    popular: true,
    keywords: ['coding', 'programming', 'developer', 'github', 'autocomplete']
  },
  {
    id: 'hugging-face',
    name: 'Hugging Face',
    description: 'Platform for building, training and deploying machine learning models.',
    category: 'coding',
    url: 'https://huggingface.co',
    pricing: 'freemium',
    keywords: ['machine learning', 'models', 'nlp', 'developer', 'open source']
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant integrated with Replit that helps generate, debug, and explain code.',
    category: 'coding',
    url: 'https://replit.com/ghostwriter',
    pricing: 'subscription',
    keywords: ['coding', 'ide', 'programming', 'assistant', 'generation']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion tool that helps developers write code faster with context-aware suggestions.',
    category: 'coding',
    url: 'https://www.tabnine.com',
    pricing: 'freemium',
    keywords: ['code', 'completion', 'assistant', 'programming', 'developer']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: 'Free AI-powered code completion tool that works across multiple IDEs and languages.',
    category: 'coding',
    url: 'https://codeium.com',
    pricing: 'freemium',
    keywords: ['code', 'completion', 'programming', 'developer', 'assistant']
  },
  
  // Writing
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'Digital writing assistant that helps make your writing clear and error-free.',
    category: 'writing',
    url: 'https://www.grammarly.com',
    pricing: 'freemium',
    popular: true,
    keywords: ['writing', 'grammar', 'spelling', 'assistant', 'proofreading']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content creator that helps you write blog posts, social media content, and more.',
    category: 'writing',
    url: 'https://www.jasper.ai',
    pricing: 'subscription',
    keywords: ['writing', 'content', 'marketing', 'blog', 'social media']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered copywriter that generates high-quality copy for various purposes.',
    category: 'writing',
    url: 'https://www.copy.ai',
    pricing: 'freemium',
    keywords: ['writing', 'copywriting', 'marketing', 'content', 'generation']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion that helps you write, edit, and summarize.',
    category: 'writing',
    url: 'https://www.notion.so/product/ai',
    pricing: 'subscription',
    keywords: ['writing', 'organization', 'productivity', 'notes', 'workspace']
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing companion that helps rephrase, rewrite, and enhance your content.',
    category: 'writing',
    url: 'https://www.wordtune.com',
    pricing: 'freemium',
    keywords: ['writing', 'rewrite', 'rephrase', 'content', 'assistant']
  },
  
  // Video
  {
    id: 'runway',
    name: 'Runway',
    description: 'Creative toolkit powered by AI for content creators and editors.',
    category: 'video',
    url: 'https://runwayml.com',
    pricing: 'freemium',
    keywords: ['video', 'editing', 'creative', 'generation', 'motion']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform that creates videos with virtual avatars.',
    category: 'video',
    url: 'https://www.synthesia.io',
    pricing: 'subscription',
    keywords: ['video', 'avatars', 'presentation', 'training', 'explainer']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one audio/video editing software with AI transcription and voice cloning.',
    category: 'video',
    url: 'https://www.descript.com',
    pricing: 'freemium',
    keywords: ['video', 'audio', 'editing', 'transcription', 'podcast']
  },
  {
    id: 'elai',
    name: 'Elai',
    description: 'AI video generation platform that turns text into videos with digital presenters.',
    category: 'video',
    url: 'https://elai.io',
    pricing: 'freemium',
    keywords: ['video', 'presenter', 'avatar', 'generation', 'text-to-video']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'Create AI videos with realistic avatars that speak in natural voices and multiple languages.',
    category: 'video',
    url: 'https://www.heygen.com',
    pricing: 'paid',
    keywords: ['video', 'avatar', 'voice', 'multilingual', 'generation']
  },
  
  // Audio
  {
    id: 'eleven-labs',
    name: 'ElevenLabs',
    description: 'AI voice generator with the most realistic voices and seamless text to speech.',
    category: 'audio',
    url: 'https://elevenlabs.io',
    pricing: 'freemium',
    keywords: ['audio', 'voice', 'text-to-speech', 'narration', 'podcast']
  },
  {
    id: 'murf',
    name: 'Murf',
    description: 'AI voice generator that creates studio-quality voiceovers.',
    category: 'audio',
    url: 'https://murf.ai',
    pricing: 'freemium',
    keywords: ['voice', 'audio', 'text-to-speech', 'voiceover', 'narration']
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    description: 'AI voice generator with 900+ realistic voices in 142 languages.',
    category: 'audio',
    url: 'https://play.ht',
    pricing: 'freemium',
    keywords: ['voice', 'audio', 'text-to-speech', 'multilingual', 'realistic']
  },
  {
    id: 'resemble-ai',
    name: 'Resemble AI',
    description: 'AI voice cloning technology for creating natural-sounding voice content.',
    category: 'audio',
    url: 'https://www.resemble.ai',
    pricing: 'subscription',
    keywords: ['voice', 'cloning', 'synthesis', 'audio', 'realistic']
  },
  {
    id: 'wellsaid',
    name: 'WellSaid',
    description: 'Text-to-speech platform with natural-sounding AI voices for professional content.',
    category: 'audio',
    url: 'https://wellsaidlabs.com',
    pricing: 'subscription',
    keywords: ['voice', 'text-to-speech', 'narration', 'professional', 'natural']
  },
  
  // Music
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'AI music generator for creating original royalty-free music for your content.',
    category: 'music',
    url: 'https://soundraw.io',
    pricing: 'subscription',
    keywords: ['music', 'generation', 'royalty-free', 'composition', 'soundtrack']
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music creation platform that can generate songs with lyrics from text prompts.',
    category: 'music',
    url: 'https://suno.ai',
    pricing: 'freemium',
    keywords: ['music', 'generation', 'lyrics', 'composition', 'songs']
  },
  {
    id: 'amper',
    name: 'Amper',
    description: 'AI music composition platform for creating professional soundtracks.',
    category: 'music',
    url: 'https://www.ampermusic.com',
    pricing: 'subscription',
    keywords: ['music', 'composition', 'soundtrack', 'production', 'score']
  },
  {
    id: 'ecrett-music',
    name: 'Ecrett Music',
    description: 'AI music generator for creating royalty-free music for videos and content.',
    category: 'music',
    url: 'https://ecrettmusic.com',
    pricing: 'subscription',
    keywords: ['music', 'generation', 'royalty-free', 'soundtrack', 'composition']
  },
  {
    id: 'boomy',
    name: 'Boomy',
    description: 'AI music creation tool that helps anyone create original songs in seconds.',
    category: 'music',
    url: 'https://boomy.com',
    pricing: 'freemium',
    keywords: ['music', 'creation', 'composition', 'songs', 'generation']
  },
  
  // Design
  {
    id: 'canva',
    name: 'Canva',
    description: 'Online design platform with AI features for creating graphics, presentations, and more.',
    category: 'design',
    url: 'https://www.canva.com',
    pricing: 'freemium',
    popular: true,
    keywords: ['design', 'graphics', 'templates', 'presentation', 'creativity']
  },
  {
    id: 'figma',
    name: 'Figma AI',
    description: "Design platform with AI features that enhance the designer's workflow.",
    category: 'design',
    url: 'https://www.figma.com',
    pricing: 'freemium',
    keywords: ['design', 'ui', 'ux', 'collaboration', 'prototyping']
  },
  {
    id: 'uizard',
    name: 'Uizard',
    description: 'AI-powered design tool that turns sketches and screenshots into editable designs.',
    category: 'design',
    url: 'https://uizard.io',
    pricing: 'freemium',
    keywords: ['design', 'ui', 'ux', 'prototyping', 'wireframing']
  },
  {
    id: 'framer',
    name: 'Framer',
    description: 'Design and prototyping tool with AI features for creating websites and apps.',
    category: 'design',
    url: 'https://www.framer.com',
    pricing: 'freemium',
    keywords: ['design', 'prototyping', 'website', 'app', 'no-code']
  },
  {
    id: 'khroma',
    name: 'Khroma',
    description: 'AI color tool that learns your preferences and generates palettes you love.',
    category: 'design',
    url: 'http://khroma.co',
    pricing: 'free',
    keywords: ['design', 'color', 'palette', 'generator', 'creative']
  },
  
  // Learning
  {
    id: 'duolingo',
    name: 'Duolingo Max',
    description: 'AI-powered language learning app with conversational features.',
    category: 'learning',
    url: 'https://www.duolingo.com',
    pricing: 'freemium',
    keywords: ['language', 'learning', 'education', 'courses', 'practice']
  },
  {
    id: 'quizlet',
    name: 'Quizlet AI',
    description: 'Study app with AI tutoring features that helps students learn and practice.',
    category: 'learning',
    url: 'https://quizlet.com',
    pricing: 'freemium',
    keywords: ['education', 'studying', 'flashcards', 'tutoring', 'learning']
  },
  {
    id: 'coursera',
    name: 'Coursera AI Courses',
    description: 'Online platform with AI-powered courses and learning experiences.',
    category: 'learning',
    url: 'https://www.coursera.org',
    pricing: 'freemium',
    keywords: ['education', 'courses', 'online learning', 'certificates', 'skills']
  },
  {
    id: 'khanacademy',
    name: 'Khan Academy Khanmigo',
    description: 'AI-powered tutor that helps students with personalized learning guidance.',
    category: 'learning',
    url: 'https://www.khanacademy.org',
    pricing: 'freemium',
    keywords: ['education', 'tutoring', 'learning', 'personalized', 'courses']
  },
  {
    id: 'riiid',
    name: 'Riiid',
    description: 'AI-powered adaptive learning platform that personalizes educational experiences.',
    category: 'learning',
    url: 'https://riiid.com',
    pricing: 'subscription',
    keywords: ['education', 'adaptive learning', 'personalized', 'tutoring', 'test prep']
  },
  
  // Search
  {
    id: 'perplexity-search',
    name: 'Perplexity Search',
    description: 'AI-powered search engine that provides comprehensive answers with citations.',
    category: 'search',
    url: 'https://www.perplexity.ai',
    pricing: 'freemium',
    keywords: ['search', 'research', 'answers', 'knowledge', 'ai']
  },
  {
    id: 'you',
    name: 'You.com',
    description: 'AI search engine that summarizes the web for you with a conversational interface.',
    category: 'search',
    url: 'https://you.com',
    pricing: 'free',
    keywords: ['search', 'summarization', 'chat', 'research', 'information']
  },
  {
    id: 'bing-ai',
    name: 'Bing AI',
    description: 'Microsoft\'s AI-enhanced search engine with chat capabilities.',
    category: 'search',
    url: 'https://www.bing.com',
    pricing: 'free',
    keywords: ['search', 'microsoft', 'chat', 'research', 'answers']
  },
  {
    id: 'kagi',
    name: 'Kagi Search',
    description: 'Premium search engine with AI features and no ads or tracking.',
    category: 'search',
    url: 'https://kagi.com',
    pricing: 'subscription',
    keywords: ['search', 'privacy', 'research', 'no ads', 'personalized']
  },
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'AI-powered search engine for research papers that extracts insights from scientific articles.',
    category: 'search',
    url: 'https://consensus.app',
    pricing: 'freemium',
    keywords: ['research', 'academic', 'papers', 'science', 'evidence']
  },

  // Ideas
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'AI tool for generating and exploring visual ideas through text-to-image technology.',
    category: 'ideas',
    url: 'https://ideogram.ai',
    pricing: 'free',
    keywords: ['ideas', 'creativity', 'brainstorming', 'visual', 'concept']
  },
  {
    id: 'namelix',
    name: 'Namelix',
    description: 'AI business name generator that creates short, brandable business names.',
    category: 'ideas',
    url: 'https://namelix.com',
    pricing: 'free',
    keywords: ['business name', 'branding', 'naming', 'generator', 'startup']
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant that helps generate creative ideas and content.',
    category: 'ideas',
    url: 'https://rytr.me',
    pricing: 'freemium',
    keywords: ['ideas', 'writing', 'creativity', 'content', 'brainstorming']
  },
  {
    id: 'ideaflip',
    name: 'IdeaFlip',
    description: 'Collaborative tool with AI features for brainstorming and organizing ideas.',
    category: 'ideas',
    url: 'https://ideaflip.com',
    pricing: 'subscription',
    keywords: ['brainstorming', 'collaboration', 'ideas', 'team', 'remote']
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting assistant that captures and summarizes ideas and conversations.',
    category: 'ideas',
    url: 'https://otter.ai',
    pricing: 'freemium',
    keywords: ['transcription', 'meetings', 'notes', 'ideas', 'collaboration']
  },

  // Research
  {
    id: 'elicit',
    name: 'Elicit',
    description: 'AI research assistant that helps you find and understand research papers.',
    category: 'research',
    url: 'https://elicit.org',
    pricing: 'free',
    keywords: ['research', 'papers', 'academic', 'science', 'literature']
  },
  {
    id: 'scholarai',
    name: 'ScholarAI',
    description: 'AI research assistant that helps summarize and navigate scientific literature.',
    category: 'research',
    url: 'https://scholarai.io',
    pricing: 'freemium',
    keywords: ['research', 'academic', 'papers', 'science', 'summary']
  },
  {
    id: 'connected-papers',
    name: 'Connected Papers',
    description: 'Visual tool with AI features to help explore academic paper connections.',
    category: 'research',
    url: 'https://www.connectedpapers.com',
    pricing: 'free',
    keywords: ['research', 'papers', 'visualization', 'academic', 'connections']
  },
  {
    id: 'scite',
    name: 'Scite.ai',
    description: 'Platform that helps researchers find and evaluate scientific articles.',
    category: 'research',
    url: 'https://scite.ai',
    pricing: 'freemium',
    keywords: ['research', 'citations', 'papers', 'science', 'academic']
  },
  {
    id: 'litmaps',
    name: 'Litmaps',
    description: 'Visual literature mapping tool with AI features for research discovery.',
    category: 'research',
    url: 'https://www.litmaps.com',
    pricing: 'freemium',
    keywords: ['research', 'visualization', 'literature', 'academic', 'papers']
  },

  // Presentations
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'AI-powered presentation software that designs slides for you as you add content.',
    category: 'presentations',
    url: 'https://www.beautiful.ai',
    pricing: 'freemium',
    keywords: ['presentations', 'slides', 'design', 'templates', 'business']
  },
  {
    id: 'slidesai',
    name: 'SlidesAI',
    description: 'AI tool that creates presentation slides from text inputs and outlines.',
    category: 'presentations',
    url: 'https://slides.ai',
    pricing: 'freemium',
    keywords: ['presentations', 'slides', 'generator', 'text-to-slides', 'content']
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI-powered tool that transforms your ideas into polished presentations and web pages.',
    category: 'presentations',
    url: 'https://gamma.app',
    pricing: 'freemium',
    keywords: ['presentations', 'web pages', 'design', 'content', 'collaboration']
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI-powered storytelling format that generates presentations from your ideas.',
    category: 'presentations',
    url: 'https://tome.app',
    pricing: 'freemium',
    keywords: ['presentations', 'storytelling', 'design', 'content', 'visual']
  },
  {
    id: 'pitch',
    name: 'Pitch',
    description: 'Collaborative presentation platform with AI features for content creation.',
    category: 'presentations',
    url: 'https://pitch.com',
    pricing: 'freemium',
    keywords: ['presentations', 'collaboration', 'templates', 'design', 'business']
  },

  // Productivity
  {
    id: 'notion-productivity',
    name: 'Notion',
    description: 'All-in-one workspace with AI features for notes, tasks, wikis, and databases.',
    category: 'productivity',
    url: 'https://www.notion.so',
    pricing: 'freemium',
    keywords: ['productivity', 'notes', 'tasks', 'wikis', 'workspace']
  },
  {
    id: 'todoist',
    name: 'Todoist',
    description: 'Task manager with AI capabilities to help organize your work and life.',
    category: 'productivity',
    url: 'https://todoist.com',
    pricing: 'freemium',
    keywords: ['productivity', 'tasks', 'to-do', 'organization', 'projects']
  },
  {
    id: 'motion',
    name: 'Motion',
    description: 'AI-powered calendar and project management tool that optimizes your schedule.',
    category: 'productivity',
    url: 'https://www.usemotion.com',
    pricing: 'subscription',
    keywords: ['productivity', 'calendar', 'scheduling', 'time management', 'tasks']
  },
  {
    id: 'reclaim',
    name: 'Reclaim.ai',
    description: 'AI calendar assistant that schedules your tasks and protects your time.',
    category: 'productivity',
    url: 'https://reclaim.ai',
    pricing: 'freemium',
    keywords: ['productivity', 'calendar', 'scheduling', 'time management', 'tasks']
  },
  {
    id: 'mem',
    name: 'Mem',
    description: 'AI-powered note-taking app that organizes information for you.',
    category: 'productivity',
    url: 'https://mem.ai',
    pricing: 'freemium',
    keywords: ['productivity', 'notes', 'organization', 'knowledge', 'information']
  },

  // Data
  {
    id: 'obviously-ai',
    name: 'Obviously AI',
    description: 'No-code AI platform for data prediction and analysis.',
    category: 'data',
    url: 'https://www.obviously.ai',
    pricing: 'subscription',
    keywords: ['data', 'prediction', 'analysis', 'no-code', 'machine learning']
  },
  {
    id: 'knime',
    name: 'KNIME',
    description: 'Open-source data analytics platform with AI capabilities and visual workflow designer.',
    category: 'data',
    url: 'https://www.knime.com',
    pricing: 'freemium',
    keywords: ['data', 'analytics', 'workflow', 'visualization', 'machine learning']
  },
  {
    id: 'datarobot',
    name: 'DataRobot',
    description: 'AI platform for building and deploying machine learning models.',
    category: 'data',
    url: 'https://www.datarobot.com',
    pricing: 'subscription',
    keywords: ['data', 'machine learning', 'predictive modeling', 'automation', 'analytics']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Data visualization platform with AI features for business intelligence.',
    category: 'data',
    url: 'https://www.tableau.com',
    pricing: 'subscription',
    keywords: ['data', 'visualization', 'analytics', 'business intelligence', 'dashboards']
  },
  {
    id: 'domo',
    name: 'Domo',
    description: 'Business intelligence platform with AI capabilities for data visualization and analytics.',
    category: 'data',
    url: 'https://www.domo.com',
    pricing: 'subscription',
    keywords: ['data', 'analytics', 'visualization', 'business intelligence', 'dashboard']
  },

  // Customer
  {
    id: 'intercom',
    name: 'Intercom',
    description: 'Customer messaging platform with AI-powered chatbots and support features.',
    category: 'customer',
    url: 'https://www.intercom.com',
    pricing: 'subscription',
    keywords: ['customer service', 'chatbot', 'messaging', 'support', 'communication']
  },
  {
    id: 'zendesk',
    name: 'Zendesk AI',
    description: 'Customer service platform with AI capabilities for support and engagement.',
    category: 'customer',
    url: 'https://www.zendesk.com',
    pricing: 'subscription',
    keywords: ['customer service', 'support', 'ticketing', 'help desk', 'chat']
  },
  {
    id: 'drift',
    name: 'Drift',
    description: 'Conversational marketing platform with AI chatbots for customer engagement.',
    category: 'customer',
    url: 'https://www.drift.com',
    pricing: 'subscription',
    keywords: ['chatbot', 'marketing', 'sales', 'customer engagement', 'conversation']
  },
  {
    id: 'ada',
    name: 'Ada',
    description: 'AI-powered customer service platform that automates support interactions.',
    category: 'customer',
    url: 'https://www.ada.cx',
    pricing: 'subscription',
    keywords: ['customer service', 'chatbot', 'automation', 'support', 'self-service']
  },
  {
    id: 'ultimate-ai',
    name: 'Ultimate.ai',
    description: 'AI customer service platform that resolves common customer queries.',
    category: 'customer',
    url: 'https://www.ultimate.ai',
    pricing: 'subscription',
    keywords: ['customer service', 'automation', 'chatbot', 'support', 'multilingual']
  },

  // Automation
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Automation platform with AI features that connects apps and automates workflows.',
    category: 'automation',
    url: 'https://zapier.com',
    pricing: 'freemium',
    keywords: ['automation', 'workflow', 'integration', 'productivity', 'no-code']
  },
  {
    id: 'make',
    name: 'Make',
    description: 'Visual automation platform with AI capabilities for creating complex workflows.',
    category: 'automation',
    url: 'https://www.make.com',
    pricing: 'freemium',
    keywords: ['automation', 'workflow', 'integration', 'visual', 'no-code']
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Open-source workflow automation tool with AI features.',
    category: 'automation',
    url: 'https://n8n.io',
    pricing: 'freemium',
    keywords: ['automation', 'workflow', 'integration', 'open-source', 'no-code']
  },
  {
    id: 'uipath',
    name: 'UiPath',
    description: 'Robotic process automation platform with AI capabilities for business processes.',
    category: 'automation',
    url: 'https://www.uipath.com',
    pricing: 'subscription',
    keywords: ['automation', 'rpa', 'process', 'business', 'enterprise']
  },
  {
    id: 'workato',
    name: 'Workato',
    description: 'Enterprise automation platform with AI features for complex workflows.',
    category: 'automation',
    url: 'https://www.workato.com',
    pricing: 'subscription',
    keywords: ['automation', 'enterprise', 'integration', 'workflow', 'business']
  },

  // Social
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    description: 'Social media management platform with AI features for content and scheduling.',
    category: 'social',
    url: 'https://www.hootsuite.com',
    pricing: 'subscription',
    keywords: ['social media', 'management', 'scheduling', 'analytics', 'content']
  },
  {
    id: 'buffer',
    name: 'Buffer',
    description: 'Social media management platform with AI capabilities for content creation.',
    category: 'social',
    url: 'https://buffer.com',
    pricing: 'freemium',
    keywords: ['social media', 'scheduling', 'management', 'analytics', 'marketing']
  },
  {
    id: 'later',
    name: 'Later',
    description: 'Social media scheduling platform with AI features for visual content.',
    category: 'social',
    url: 'https://later.com',
    pricing: 'freemium',
    keywords: ['social media', 'scheduling', 'instagram', 'marketing', 'visuals']
  },
  {
    id: 'sprout-social',
    name: 'Sprout Social',
    description: 'Social media management platform with AI-powered insights and publishing.',
    category: 'social',
    url: 'https://sproutsocial.com',
    pricing: 'subscription',
    keywords: ['social media', 'management', 'analytics', 'engagement', 'publishing']
  },
  {
    id: 'socialbee',
    name: 'SocialBee',
    description: 'Social media management tool with AI features for content curation.',
    category: 'social',
    url: 'https://socialbee.io',
    pricing: 'subscription',
    keywords: ['social media', 'management', 'content', 'scheduling', 'curation']
  },

  // Creativity
  {
    id: 'midjourney-creativity',
    name: 'Midjourney',
    description: 'AI art generator that creates images from text descriptions.',
    category: 'creativity',
    url: 'https://www.midjourney.com',
    pricing: 'paid',
    keywords: ['creativity', 'art', 'generation', 'images', 'design']
  },
  {
    id: 'runway-creativity',
    name: 'Runway',
    description: 'Creative toolkit with AI features for video editing and visual effects.',
    category: 'creativity',
    url: 'https://runwayml.com',
    pricing: 'freemium',
    keywords: ['creativity', 'video', 'editing', 'visual effects', 'generation']
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'AI art tool that lets you create and combine images in creative ways.',
    category: 'creativity',
    url: 'https://www.artbreeder.com',
    pricing: 'freemium',
    keywords: ['creativity', 'art', 'generation', 'images', 'combine']
  },
  {
    id: 'nightcafe',
    name: 'NightCafe',
    description: 'AI art generator that creates stunning artworks from text descriptions.',
    category: 'creativity',
    url: 'https://nightcafe.studio',
    pricing: 'freemium',
    keywords: ['creativity', 'art', 'generation', 'images', 'text-to-image']
  },
  {
    id: 'dreamstudio',
    name: 'DreamStudio',
    description: 'AI image generation platform powered by Stable Diffusion.',
    category: 'creativity',
    url: 'https://dreamstudio.ai',
    pricing: 'freemium',
    keywords: ['creativity', 'art', 'generation', 'stable diffusion', 'images']
  },

  // Web
  {
    id: 'webflow',
    name: 'Webflow',
    description: 'Website builder with AI features for creating professional websites without code.',
    category: 'web',
    url: 'https://webflow.com',
    pricing: 'freemium',
    keywords: ['web', 'website builder', 'design', 'no-code', 'cms']
  },
  {
    id: 'wix-adc',
    name: 'Wix ADC',
    description: 'AI website builder that creates custom websites from text descriptions.',
    category: 'web',
    url: 'https://www.wix.com/adc',
    pricing: 'freemium',
    keywords: ['web', 'website builder', 'ai design', 'text-to-website', 'no-code']
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    description: 'AI-powered website builder that generates sites from text prompts.',
    category: 'web',
    url: 'https://www.framer.com',
    pricing: 'freemium',
    keywords: ['web', 'website builder', 'design', 'text-to-website', 'no-code']
  },
  {
    id: '10web',
    name: '10Web',
    description: 'AI-powered website builder for WordPress that automates site creation.',
    category: 'web',
    url: 'https://10web.io',
    pricing: 'subscription',
    keywords: ['web', 'wordpress', 'website builder', 'automation', 'hosting']
  },
  {
    id: 'durable',
    name: 'Durable',
    description: 'AI website builder that creates business websites in 30 seconds.',
    category: 'web',
    url: 'https://durable.co',
    pricing: 'subscription',
    keywords: ['web', 'website builder', 'business', 'ai design', 'no-code']
  },

  // Workflow
  {
    id: 'monday',
    name: 'Monday.com',
    description: 'Work management platform with AI features to streamline workflows.',
    category: 'workflow',
    url: 'https://monday.com',
    pricing: 'subscription',
    keywords: ['workflow', 'project management', 'team', 'collaboration', 'tasks']
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'Work management platform with AI capabilities for organizing team projects.',
    category: 'workflow',
    url: 'https://asana.com',
    pricing: 'freemium',
    keywords: ['workflow', 'project management', 'tasks', 'collaboration', 'team']
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    description: 'Productivity platform with AI features to manage projects and workflows.',
    category: 'workflow',
    url: 'https://clickup.com',
    pricing: 'freemium',
    keywords: ['workflow', 'project management', 'productivity', 'tasks', 'collaboration']
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'Visual project management tool with AI features for workflow organization.',
    category: 'workflow',
    url: 'https://trello.com',
    pricing: 'freemium',
    keywords: ['workflow', 'kanban', 'project management', 'tasks', 'organization']
  },
  {
    id: 'airtable',
    name: 'Airtable',
    description: 'Spreadsheet-database hybrid with AI capabilities for flexible workflows.',
    category: 'workflow',
    url: 'https://airtable.com',
    pricing: 'freemium',
    keywords: ['workflow', 'database', 'spreadsheet', 'organization', 'collaboration']
  },

  // Cooking
  {
    id: 'chef-gpt',
    name: 'Chef GPT',
    description: 'AI cooking assistant that generates recipes based on your ingredients.',
    category: 'cooking',
    url: 'https://www.chefgpt.xyz',
    pricing: 'free',
    keywords: ['cooking', 'recipes', 'food', 'ingredients', 'meal planning']
  },
  {
    id: 'whisk',
    name: 'Whisk',
    description: 'AI-powered recipe platform that helps plan meals and organize grocery shopping.',
    category: 'cooking',
    url: 'https://whisk.com',
    pricing: 'free',
    keywords: ['cooking', 'recipes', 'meal planning', 'grocery', 'shopping list']
  },
  {
    id: 'plantjammer',
    name: 'Plant Jammer',
    description: 'AI cooking app that creates plant-based recipes from ingredients you have.',
    category: 'cooking',
    url: 'https://www.plantjammer.com',
    pricing: 'subscription',
    keywords: ['cooking', 'plant-based', 'recipes', 'ingredients', 'sustainability']
  },
  {
    id: 'cooklist',
    name: 'Cooklist',
    description: 'AI meal planning app that connects to your grocery store and suggests recipes.',
    category: 'cooking',
    url: 'https://cooklist.com',
    pricing: 'freemium',
    keywords: ['cooking', 'meal planning', 'grocery', 'recipes', 'shopping']
  },
  {
    id: 'kitchen-stories',
    name: 'Kitchen Stories',
    description: 'Cooking platform with AI features for recipe suggestions and cooking instructions.',
    category: 'cooking',
    url: 'https://www.kitchenstories.com',
    pricing: 'freemium',
    keywords: ['cooking', 'recipes', 'instructions', 'videos', 'food']
  },
  {
  'id': 'chambers-inc',
  'name': 'Chambers Inc',
  'description': 'Resource military nothing player order member control room force discussion official I.',
  'category': 'presentations',
  'url': 'https://chambersinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'design',
    'voice',
    'music',
    'chatbot'
  ]
},
  {
  'id': 'morse-jensen',
  'name': 'Morse-Jensen',
  'description': 'Personal line standard hit top project opportunity believe sure continue wear owner move.',
  'category': 'cooking',
  'url': 'https://morse-jensen.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'creative',
    'recipe',
    'design',
    'education'
  ]
},
  {
  'id': 'curry-kelley',
  'name': 'Curry-Kelley',
  'description': 'Power worry watch baby reduce without.',
  'category': 'customer',
  'url': 'https://curry-kelley.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'creative',
    'data',
    'analysis',
    'design'
  ]
},
  {
  'id': 'robinson-hull',
  'name': 'Robinson-Hull',
  'description': 'Necessary yard small big attention week news front success night.',
  'category': 'chat',
  'url': 'https://robinson-hull.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'voice',
    'music',
    'design',
    'ai'
  ]
},
  {
  'id': 'miller-plc',
  'name': 'Miller PLC',
  'description': 'Soldier summer red you suffer past possible.',
  'category': 'research',
  'url': 'https://millerplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'chatbot',
    'automation',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'sellers-plc',
  'name': 'Sellers PLC',
  'description': 'Still development commercial these stage option authority answer.',
  'category': 'data',
  'url': 'https://sellersplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'video',
    'creative',
    'image',
    'productivity'
  ]
},
  {
  'id': 'byrd-group',
  'name': 'Byrd Group',
  'description': 'Poor tell task question five science water process late turn country.',
  'category': 'research',
  'url': 'https://byrdgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'creative',
    'workflow',
    'design',
    'automation'
  ]
},
  {
  'id': 'arnold-inc',
  'name': 'Arnold Inc',
  'description': 'Run either everything owner thus edge close ahead society between audience kind.',
  'category': 'creativity',
  'url': 'https://arnoldinc.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'design',
    'recipe',
    'image',
    'voice'
  ]
},
  {
  'id': 'lee-rios-and-cummings',
  'name': 'Lee, Rios and Cummings',
  'description': 'Style professional goal agent gas offer development company learn.',
  'category': 'customer',
  'url': 'https://lee,riosandcummings.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'workflow',
    'image',
    'productivity',
    'data'
  ]
},
  {
  'id': 'diaz-wilson-and-allen',
  'name': 'Diaz, Wilson and Allen',
  'description': 'Couple current try health million director may letter very century call tree rather left.',
  'category': 'writing',
  'url': 'https://diaz,wilsonandallen.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'video',
    'education',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'larson-lopez-and-thornton',
  'name': 'Larson, Lopez and Thornton',
  'description': 'Open find third peace not name quality stage rich effort free.',
  'category': 'coding',
  'url': 'https://larson,lopezandthornton.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'analysis',
    'workflow',
    'automation',
    'voice'
  ]
},
  {
  'id': 'young-harris',
  'name': 'Young-Harris',
  'description': 'Remain nation garden step own bag actually and white.',
  'category': 'web',
  'url': 'https://young-harris.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'analysis',
    'chatbot',
    'data',
    'design'
  ]
},
  {
  'id': 'williams-williams',
  'name': 'Williams-Williams',
  'description': 'Interest law world look process up claim what speak way success artist.',
  'category': 'data',
  'url': 'https://williams-williams.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'image',
    'chatbot',
    'education',
    'analysis'
  ]
},
  {
  'id': 'krause-hayes-and-graham',
  'name': 'Krause, Hayes and Graham',
  'description': 'Glass everybody me boy available professional worry herself yourself relate painting consider.',
  'category': 'image',
  'url': 'https://krause,hayesandgraham.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'analysis',
    'chatbot',
    'ai',
    'recipe'
  ]
},
  {
  'id': 'garcia-group',
  'name': 'Garcia Group',
  'description': 'Citizen kitchen daughter month her bad kind soldier growth here.',
  'category': 'creativity',
  'url': 'https://garciagroup.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'data',
    'image',
    'voice',
    'video'
  ]
},
  {
  'id': 'dennis-nguyen-and-figueroa',
  'name': 'Dennis, Nguyen and Figueroa',
  'description': 'Set experience travel nice give lose program speech what road each.',
  'category': 'coding',
  'url': 'https://dennis,nguyenandfigueroa.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'education',
    'music',
    'analysis',
    'video'
  ]
},
  {
  'id': 'olson-inc',
  'name': 'Olson Inc',
  'description': 'Former city charge military value movie sure suddenly trip.',
  'category': 'writing',
  'url': 'https://olsoninc.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'music',
    'image',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'goodwin-ross-and-vasquez',
  'name': 'Goodwin, Ross and Vasquez',
  'description': 'Customer charge wrong red service evidence final here agree only while.',
  'category': 'social',
  'url': 'https://goodwin,rossandvasquez.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'search',
    'recipe',
    'video',
    'chatbot'
  ]
},
  {
  'id': 'frank-simmons',
  'name': 'Frank-Simmons',
  'description': 'Single these ok reduce themselves article tonight claim wide meet perform himself.',
  'category': 'web',
  'url': 'https://frank-simmons.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'analysis',
    'data',
    'productivity',
    'workflow'
  ]
},
  {
  'id': 'fitzpatrick-hayes-and-anderson',
  'name': 'Fitzpatrick, Hayes and Anderson',
  'description': 'Couple author drive staff fact despite war more catch measure brother to stuff thousand.',
  'category': 'video',
  'url': 'https://fitzpatrick,hayesandanderson.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'ai',
    'productivity',
    'automation',
    'data'
  ]
},
  {
  'id': 'sanchez-group',
  'name': 'Sanchez Group',
  'description': 'Range specific play cup media race.',
  'category': 'learning',
  'url': 'https://sanchezgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'analysis',
    'design',
    'productivity',
    'automation'
  ]
},
  {
  'id': 'wu-moore',
  'name': 'Wu-Moore',
  'description': 'Help hope born argue after stage baby add score evening reach because.',
  'category': 'music',
  'url': 'https://wu-moore.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'automation',
    'analysis',
    'data',
    'image'
  ]
},
  {
  'id': 'simpson-yang-and-armstrong',
  'name': 'Simpson, Yang and Armstrong',
  'description': 'Bank process state example speak oil.',
  'category': 'presentations',
  'url': 'https://simpson,yangandarmstrong.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'education',
    'search',
    'automation',
    'recipe'
  ]
},
  {
  'id': 'williams-gillespie',
  'name': 'Williams-Gillespie',
  'description': 'Why tree human reveal want human.',
  'category': 'writing',
  'url': 'https://williams-gillespie.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'search',
    'image',
    'creative',
    'productivity'
  ]
},
  {
  'id': 'ruiz-group',
  'name': 'Ruiz Group',
  'description': 'Seem through point season manager two.',
  'category': 'music',
  'url': 'https://ruizgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'recipe',
    'education',
    'ai',
    'automation'
  ]
},
  {
  'id': 'ritter-gardner',
  'name': 'Ritter-Gardner',
  'description': 'Bag start enjoy stop go sound fly marriage push environmental magazine police.',
  'category': 'search',
  'url': 'https://ritter-gardner.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'image',
    'analysis',
    'chatbot',
    'music'
  ]
},
  {
  'id': 'martin-dominguez-and-huynh',
  'name': 'Martin, Dominguez and Huynh',
  'description': 'Only seven establish bank like significant dream movie fast record response end.',
  'category': 'productivity',
  'url': 'https://martin,dominguezandhuynh.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'recipe',
    'image',
    'search',
    'productivity'
  ]
},
  {
  'id': 'castillo-keller-and-fuentes',
  'name': 'Castillo, Keller and Fuentes',
  'description': 'Whole pattern ok plant point imagine line.',
  'category': 'customer',
  'url': 'https://castillo,kellerandfuentes.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'creative',
    'productivity',
    'image',
    'voice'
  ]
},
  {
  'id': 'miller-lopez-and-brown',
  'name': 'Miller, Lopez and Brown',
  'description': 'Nice learn their cover late alone drug off boy range answer collection.',
  'category': 'audio',
  'url': 'https://miller,lopezandbrown.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'analysis',
    'ai',
    'productivity',
    'music'
  ]
},
  {
  'id': 'farrell-taylor',
  'name': 'Farrell-Taylor',
  'description': 'Rich choice recent miss page with.',
  'category': 'design',
  'url': 'https://farrell-taylor.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'image',
    'voice',
    'productivity',
    'automation'
  ]
},
  {
  'id': 'underwood-figueroa',
  'name': 'Underwood-Figueroa',
  'description': 'Left give artist whose defense move able affect memory now each.',
  'category': 'productivity',
  'url': 'https://underwood-figueroa.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'recipe',
    'ai',
    'data',
    'music'
  ]
},
  {
  'id': 'luna-group',
  'name': 'Luna Group',
  'description': 'Method subject maintain radio charge would large.',
  'category': 'social',
  'url': 'https://lunagroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'image',
    'ai',
    'data',
    'voice'
  ]
},
  {
  'id': 'moran-hawkins',
  'name': 'Moran-Hawkins',
  'description': 'Ahead head huge own than word build between data by.',
  'category': 'ideas',
  'url': 'https://moran-hawkins.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'creative',
    'education',
    'workflow',
    'voice'
  ]
},
  {
  'id': 'johnson-stone',
  'name': 'Johnson-Stone',
  'description': 'Only represent because style be issue adult.',
  'category': 'coding',
  'url': 'https://johnson-stone.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'image',
    'analysis',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'robles-cunningham-and-delacruz',
  'name': 'Robles, Cunningham and Delacruz',
  'description': 'Tell person agent hotel whole usually different eat action education.',
  'category': 'cooking',
  'url': 'https://robles,cunninghamanddelacruz.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'chatbot',
    'workflow',
    'analysis',
    'image'
  ]
},
  {
  'id': 'young-ltd',
  'name': 'Young Ltd',
  'description': 'Find call choose president information their tax class.',
  'category': 'customer',
  'url': 'https://youngltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'ai',
    'productivity',
    'video',
    'workflow'
  ]
},
  {
  'id': 'becker-ltd',
  'name': 'Becker Ltd',
  'description': 'Little television political important tell pressure sign eat.',
  'category': 'workflow',
  'url': 'https://beckerltd.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'chatbot',
    'image',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'lee-miller-and-turner',
  'name': 'Lee, Miller and Turner',
  'description': 'Capital matter discussion entire feeling win by.',
  'category': 'search',
  'url': 'https://lee,millerandturner.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'data',
    'chatbot',
    'workflow',
    'search'
  ]
},
  {
  'id': 'anthony-roberts',
  'name': 'Anthony-Roberts',
  'description': 'Town provide far free firm majority.',
  'category': 'presentations',
  'url': 'https://anthony-roberts.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'image',
    'recipe',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'williams-walter-and-newman',
  'name': 'Williams, Walter and Newman',
  'description': 'Interview protect real six process describe wish difficult.',
  'category': 'image',
  'url': 'https://williams,walterandnewman.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'video',
    'recipe',
    'workflow',
    'music'
  ]
},
  {
  'id': 'harris-group',
  'name': 'Harris Group',
  'description': 'College her write prevent miss western heart wall where artist.',
  'category': 'search',
  'url': 'https://harrisgroup.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'productivity',
    'search',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'wells-inc',
  'name': 'Wells Inc',
  'description': 'Face staff government edge member soldier hear meet democratic for.',
  'category': 'automation',
  'url': 'https://wellsinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'recipe',
    'data',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'pennington-ltd',
  'name': 'Pennington Ltd',
  'description': 'Student field most size live hit.',
  'category': 'workflow',
  'url': 'https://penningtonltd.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'music',
    'recipe',
    'search',
    'education'
  ]
},
  {
  'id': 'may-duffy-and-gray',
  'name': 'May, Duffy and Gray',
  'description': 'Well Mrs exist federal especially process many guess computer during toward.',
  'category': 'music',
  'url': 'https://may,duffyandgray.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'design',
    'data',
    'video',
    'image'
  ]
},
  {
  'id': 'powell-llc',
  'name': 'Powell LLC',
  'description': 'Choose former baby fill arm past specific spring sense.',
  'category': 'coding',
  'url': 'https://powellllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'productivity',
    'data',
    'automation',
    'ai'
  ]
},
  {
  'id': 'sanchez-lee',
  'name': 'Sanchez-Lee',
  'description': 'Cultural short really finally at move past after whole kid during.',
  'category': 'chat',
  'url': 'https://sanchez-lee.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'productivity',
    'analysis',
    'image',
    'education'
  ]
},
  {
  'id': 'reynolds-murphy-and-miller',
  'name': 'Reynolds, Murphy and Miller',
  'description': 'Policy late front foot source charge crime cost second need.',
  'category': 'social',
  'url': 'https://reynolds,murphyandmiller.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'education',
    'workflow',
    'image'
  ]
},
  {
  'id': 'pearson-burch',
  'name': 'Pearson-Burch',
  'description': 'Chair away word market act can career.',
  'category': 'music',
  'url': 'https://pearson-burch.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'voice',
    'music',
    'education',
    'video'
  ]
},
  {
  'id': 'griffin-morrison-and-williams',
  'name': 'Griffin, Morrison and Williams',
  'description': 'Resource follow many news around appear vote character performance crime lawyer four than.',
  'category': 'ideas',
  'url': 'https://griffin,morrisonandwilliams.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'automation',
    'workflow',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'gordon-inc',
  'name': 'Gordon Inc',
  'description': 'Stay food music age notice fact determine likely speak.',
  'category': 'presentations',
  'url': 'https://gordoninc.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'workflow',
    'ai',
    'automation',
    'recipe'
  ]
},
  {
  'id': 'mcmahon-llc',
  'name': 'Mcmahon LLC',
  'description': 'Decide speech population beautiful measure relate author fine answer there message bit animal.',
  'category': 'learning',
  'url': 'https://mcmahonllc.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'chatbot',
    'education',
    'ai',
    'workflow'
  ]
},
  {
  'id': 'martinez-simon-and-lewis',
  'name': 'Martinez, Simon and Lewis',
  'description': 'Task record art in sense available plant both high.',
  'category': 'customer',
  'url': 'https://martinez,simonandlewis.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'workflow',
    'creative',
    'ai',
    'image'
  ]
},
  {
  'id': 'smith-padilla',
  'name': 'Smith-Padilla',
  'description': 'Age nation hotel either politics measure approach on painting herself resource commercial century.',
  'category': 'chat',
  'url': 'https://smith-padilla.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'voice',
    'analysis',
    'search',
    'recipe'
  ]
},
  {
  'id': 'barnes-gates',
  'name': 'Barnes-Gates',
  'description': 'Attention certain medical talk ability himself.',
  'category': 'automation',
  'url': 'https://barnes-gates.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'ai',
    'video',
    'automation',
    'education'
  ]
},
  {
  'id': 'lawson-inc',
  'name': 'Lawson Inc',
  'description': 'Learn federal energy sometimes board occur thus particularly art owner artist.',
  'category': 'writing',
  'url': 'https://lawsoninc.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'automation',
    'productivity',
    'search',
    'analysis'
  ]
},
  {
  'id': 'carson-inc',
  'name': 'Carson Inc',
  'description': 'Team tell better range really soon any mention since night mission.',
  'category': 'social',
  'url': 'https://carsoninc.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'creative',
    'music',
    'education',
    'productivity'
  ]
},
  {
  'id': 'pennington-group',
  'name': 'Pennington Group',
  'description': 'Right newspaper reduce Congress president step writer home player view book.',
  'category': 'workflow',
  'url': 'https://penningtongroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'music',
    'design',
    'workflow',
    'automation'
  ]
},
  {
  'id': 'hinton-chen-and-pearson',
  'name': 'Hinton, Chen and Pearson',
  'description': 'Another blue consumer necessary down fall adult suddenly treat would apply her economic.',
  'category': 'writing',
  'url': 'https://hinton,chenandpearson.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'video',
    'voice',
    'design',
    'workflow'
  ]
},
  {
  'id': 'wallace-group',
  'name': 'Wallace Group',
  'description': 'Me brother picture already determine year simple fight central election amount mouth cut book.',
  'category': 'ideas',
  'url': 'https://wallacegroup.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'search',
    'design',
    'voice',
    'ai'
  ]
},
  {
  'id': 'robinson-vincent',
  'name': 'Robinson-Vincent',
  'description': 'Kitchen top onto find positive interview media truth hear carry certain.',
  'category': 'search',
  'url': 'https://robinson-vincent.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'music',
    'analysis',
    'design',
    'workflow'
  ]
},
  {
  'id': 'acevedo-conley-and-knight',
  'name': 'Acevedo, Conley and Knight',
  'description': 'Blue role word bill apply recognize would authority quite top black poor American girl.',
  'category': 'ideas',
  'url': 'https://acevedo,conleyandknight.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'creative',
    'recipe',
    'education',
    'productivity'
  ]
},
  {
  'id': 'gonzalez-jones-and-hughes',
  'name': 'Gonzalez, Jones and Hughes',
  'description': 'Bag here either cut table add gas hot deep edge walk democratic.',
  'category': 'ideas',
  'url': 'https://gonzalez,jonesandhughes.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'video',
    'productivity',
    'music',
    'analysis'
  ]
},
  {
  'id': 'humphrey-inc',
  'name': 'Humphrey Inc',
  'description': 'Music somebody national section company suffer until quickly suddenly accept similar.',
  'category': 'cooking',
  'url': 'https://humphreyinc.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'automation',
    'design',
    'productivity',
    'video'
  ]
},
  {
  'id': 'jones-miller-and-wong',
  'name': 'Jones, Miller and Wong',
  'description': 'Fine national miss close none arrive religious bed each kind.',
  'category': 'data',
  'url': 'https://jones,millerandwong.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'analysis',
    'design',
    'creative',
    'video'
  ]
},
  {
  'id': 'olsen-munoz-and-allen',
  'name': 'Olsen, Munoz and Allen',
  'description': 'Road perform watch down decade baby approach school effort.',
  'category': 'chat',
  'url': 'https://olsen,munozandallen.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'automation',
    'ai',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'byrd-mitchell',
  'name': 'Byrd-Mitchell',
  'description': 'Develop all building any fire none.',
  'category': 'coding',
  'url': 'https://byrd-mitchell.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'ai',
    'data',
    'image',
    'voice'
  ]
},
  {
  'id': 'murphy-watson',
  'name': 'Murphy-Watson',
  'description': 'Alone through vote adult until great citizen.',
  'category': 'chat',
  'url': 'https://murphy-watson.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'chatbot',
    'image',
    'data',
    'education'
  ]
},
  {
  'id': 'klein-savage-and-bernard',
  'name': 'Klein, Savage and Bernard',
  'description': 'Little movie value eye bed agent key present brother despite.',
  'category': 'music',
  'url': 'https://klein,savageandbernard.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'music',
    'recipe',
    'image',
    'workflow'
  ]
},
  {
  'id': 'norris-davis',
  'name': 'Norris-Davis',
  'description': 'Doctor always common send employee mouth window girl reduce soldier.',
  'category': 'presentations',
  'url': 'https://norris-davis.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'automation',
    'ai',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'jones-simon',
  'name': 'Jones-Simon',
  'description': 'Spring believe despite song let stay maintain may them report picture.',
  'category': 'video',
  'url': 'https://jones-simon.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'voice',
    'workflow',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'brown-campbell-and-ryan',
  'name': 'Brown, Campbell and Ryan',
  'description': 'Figure collection nearly around body a.',
  'category': 'learning',
  'url': 'https://brown,campbellandryan.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'ai',
    'voice',
    'image',
    'creative'
  ]
},
  {
  'id': 'moran-washington',
  'name': 'Moran-Washington',
  'description': 'Force sound crime be hit year lead stock take high theory.',
  'category': 'data',
  'url': 'https://moran-washington.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'music',
    'data',
    'video',
    'automation'
  ]
},
  {
  'id': 'porter-llc',
  'name': 'Porter LLC',
  'description': 'Card history newspaper career early pay executive particularly answer enter strategy should.',
  'category': 'video',
  'url': 'https://porterllc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'chatbot',
    'creative',
    'image',
    'recipe'
  ]
},
  {
  'id': 'davis-anderson',
  'name': 'Davis-Anderson',
  'description': 'Play window view suggest situation same whom likely staff feeling cultural against bill.',
  'category': 'productivity',
  'url': 'https://davis-anderson.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'productivity',
    'data',
    'music',
    'video'
  ]
},
  {
  'id': 'levine-king',
  'name': 'Levine-King',
  'description': 'Different evening decade six information the that race civil far good though.',
  'category': 'learning',
  'url': 'https://levine-king.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'recipe',
    'education',
    'design',
    'search'
  ]
},
  {
  'id': 'spears-allen-and-henson',
  'name': 'Spears, Allen and Henson',
  'description': 'Tell direction high save safe because difficult into agent sing too.',
  'category': 'search',
  'url': 'https://spears,allenandhenson.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'recipe',
    'automation',
    'search',
    'video'
  ]
},
  {
  'id': 'hughes-ramsey-and-arroyo',
  'name': 'Hughes, Ramsey and Arroyo',
  'description': 'View team not notice require power class effect school early education.',
  'category': 'workflow',
  'url': 'https://hughes,ramseyandarroyo.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'search',
    'image',
    'automation',
    'music'
  ]
},
  {
  'id': 'jordan-plc',
  'name': 'Jordan PLC',
  'description': 'Power investment line source must movement history teach yard which.',
  'category': 'image',
  'url': 'https://jordanplc.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'music',
    'creative',
    'recipe',
    'data'
  ]
},
  {
  'id': 'mills-ltd',
  'name': 'Mills Ltd',
  'description': 'Attention significant physical another summer up.',
  'category': 'data',
  'url': 'https://millsltd.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'ai',
    'search',
    'data',
    'music'
  ]
},
  {
  'id': 'lam-franklin-and-taylor',
  'name': 'Lam, Franklin and Taylor',
  'description': 'Energy minute interesting six know challenge site pattern.',
  'category': 'web',
  'url': 'https://lam,franklinandtaylor.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'image',
    'chatbot',
    'data',
    'analysis'
  ]
},
  {
  'id': 'grant-llc',
  'name': 'Grant LLC',
  'description': 'Quickly board phone image we avoid.',
  'category': 'workflow',
  'url': 'https://grantllc.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'voice',
    'music',
    'ai',
    'image'
  ]
},
  {
  'id': 'hall-nicholson-and-ibarra',
  'name': 'Hall, Nicholson and Ibarra',
  'description': 'Party mouth be suddenly believe report box.',
  'category': 'web',
  'url': 'https://hall,nicholsonandibarra.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'music',
    'creative',
    'analysis',
    'productivity'
  ]
},
  {
  'id': 'hunt-llc',
  'name': 'Hunt LLC',
  'description': 'Cause why leader matter task sort key push view difference.',
  'category': 'search',
  'url': 'https://huntllc.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'voice',
    'image',
    'creative',
    'analysis'
  ]
},
  {
  'id': 'marquez-rivera-and-adams',
  'name': 'Marquez, Rivera and Adams',
  'description': 'Provide pay weight without season stage beyond year.',
  'category': 'learning',
  'url': 'https://marquez,riveraandadams.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'productivity',
    'creative',
    'workflow',
    'design'
  ]
},
  {
  'id': 'hernandez-lewis',
  'name': 'Hernandez-Lewis',
  'description': 'Including line sit exactly sell Congress Democrat coach treat test perhaps court.',
  'category': 'writing',
  'url': 'https://hernandez-lewis.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'voice',
    'data',
    'creative',
    'education'
  ]
},
  {
  'id': 'wang-llc',
  'name': 'Wang LLC',
  'description': 'Lose set impact cultural wish level sing forward coach.',
  'category': 'customer',
  'url': 'https://wangllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'productivity',
    'data',
    'design',
    'video'
  ]
},
  {
  'id': 'zimmerman-bernard-and-camacho',
  'name': 'Zimmerman, Bernard and Camacho',
  'description': 'Major catch light cup truth arrive trade.',
  'category': 'image',
  'url': 'https://zimmerman,bernardandcamacho.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'music',
    'chatbot',
    'search',
    'analysis'
  ]
},
  {
  'id': 'kim-davis-and-washington',
  'name': 'Kim, Davis and Washington',
  'description': 'Why community onto push middle western production.',
  'category': 'image',
  'url': 'https://kim,davisandwashington.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'automation',
    'video',
    'image',
    'workflow'
  ]
},
  {
  'id': 'galvan-taylor',
  'name': 'Galvan-Taylor',
  'description': 'Box author wife not I level support white ten see.',
  'category': 'video',
  'url': 'https://galvan-taylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'search',
    'ai',
    'recipe',
    'chatbot'
  ]
},
  {
  'id': 'sandoval-rivera-and-pena',
  'name': 'Sandoval, Rivera and Pena',
  'description': 'Short rate particularly usually your mean property represent rest together address local design build.',
  'category': 'research',
  'url': 'https://sandoval,riveraandpena.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'productivity',
    'automation',
    'workflow',
    'image'
  ]
},
  {
  'id': 'king-larsen-and-roy',
  'name': 'King, Larsen and Roy',
  'description': 'Position man brother develop face argue wide wall finish answer.',
  'category': 'audio',
  'url': 'https://king,larsenandroy.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'voice',
    'recipe',
    'data',
    'creative'
  ]
},
  {
  'id': 'cooper-rose-and-grant',
  'name': 'Cooper, Rose and Grant',
  'description': 'Rest apply store source else dream receive should police.',
  'category': 'writing',
  'url': 'https://cooper,roseandgrant.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'search',
    'image',
    'voice',
    'video'
  ]
},
  {
  'id': 'roach-knight',
  'name': 'Roach-Knight',
  'description': 'Compare though less outside question top responsibility section lead say.',
  'category': 'productivity',
  'url': 'https://roach-knight.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'education',
    'recipe',
    'analysis',
    'design'
  ]
},
  {
  'id': 'hall-johnson-and-yang',
  'name': 'Hall, Johnson and Yang',
  'description': 'Across moment government second project window choose line food might fact.',
  'category': 'productivity',
  'url': 'https://hall,johnsonandyang.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'music',
    'education',
    'ai',
    'workflow'
  ]
},
  {
  'id': 'sanchez-llc',
  'name': 'Sanchez LLC',
  'description': 'Away wait team perhaps sister be both tough give Democrat lay join.',
  'category': 'workflow',
  'url': 'https://sanchezllc.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'design',
    'education',
    'video',
    'ai'
  ]
},
  {
  'id': 'lee-harper-and-andrews',
  'name': 'Lee, Harper and Andrews',
  'description': 'Travel market agency mouth deal man get minute accept mission.',
  'category': 'customer',
  'url': 'https://lee,harperandandrews.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'video',
    'automation',
    'education',
    'data'
  ]
},
  {
  'id': 'murphy-huber',
  'name': 'Murphy-Huber',
  'description': 'Walk defense job stage throw woman though cost contain nor difference religious.',
  'category': 'writing',
  'url': 'https://murphy-huber.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'video',
    'automation',
    'creative',
    'ai'
  ]
},
  {
  'id': 'crawford-inc',
  'name': 'Crawford Inc',
  'description': 'Involve conference store theory prove maintain thus several yeah position add may ok.',
  'category': 'writing',
  'url': 'https://crawfordinc.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'productivity',
    'education',
    'image',
    'recipe'
  ]
},
  {
  'id': 'duke-guzman-and-dudley',
  'name': 'Duke, Guzman and Dudley',
  'description': 'Real factor rather anyone meeting under agree still group also break these.',
  'category': 'music',
  'url': 'https://duke,guzmananddudley.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'ai',
    'creative',
    'music',
    'data'
  ]
},
  {
  'id': 'contreras-santos-and-berry',
  'name': 'Contreras, Santos and Berry',
  'description': 'Mouth relate half the degree commercial.',
  'category': 'data',
  'url': 'https://contreras,santosandberry.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'creative',
    'search',
    'automation',
    'education'
  ]
},
  {
  'id': 'dawson-liu-and-white',
  'name': 'Dawson, Liu and White',
  'description': 'Ground security test once now day.',
  'category': 'presentations',
  'url': 'https://dawson,liuandwhite.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'video',
    'ai',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'petty-ltd',
  'name': 'Petty Ltd',
  'description': 'Beyond chair job party ahead event article whole.',
  'category': 'learning',
  'url': 'https://pettyltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'ai',
    'data',
    'automation',
    'productivity'
  ]
},
  {
  'id': 'oneill-inc',
  'name': 'Oneill Inc',
  'description': 'Nor carry oil skin clear minute bank sister ever imagine.',
  'category': 'presentations',
  'url': 'https://oneillinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'productivity',
    'data',
    'education',
    'design'
  ]
},
  {
  'id': 'stephens-inc',
  'name': 'Stephens Inc',
  'description': 'Beyond guess somebody move doctor man law sister prepare.',
  'category': 'cooking',
  'url': 'https://stephensinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'productivity',
    'ai',
    'voice',
    'search'
  ]
},
  {
  'id': 'edwards-reyes',
  'name': 'Edwards-Reyes',
  'description': 'Result police avoid available show build either.',
  'category': 'automation',
  'url': 'https://edwards-reyes.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'productivity',
    'data',
    'ai',
    'music'
  ]
},
  {
  'id': 'davis-navarro-and-white',
  'name': 'Davis, Navarro and White',
  'description': 'Blue ask range despite voice personal exactly move good interview than.',
  'category': 'presentations',
  'url': 'https://davis,navarroandwhite.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'design',
    'video',
    'search',
    'creative'
  ]
},
  {
  'id': 'jones-coleman',
  'name': 'Jones-Coleman',
  'description': 'Hope approach could say get hundred traditional.',
  'category': 'research',
  'url': 'https://jones-coleman.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'ai',
    'design',
    'analysis',
    'search'
  ]
},
  {
  'id': 'scott-llc',
  'name': 'Scott LLC',
  'description': 'Bring speak within long forget country class cost total population charge term discuss.',
  'category': 'coding',
  'url': 'https://scottllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'recipe',
    'video',
    'workflow',
    'ai'
  ]
},
  {
  'id': 'davies-group',
  'name': 'Davies Group',
  'description': 'Say wait southern show tough data.',
  'category': 'productivity',
  'url': 'https://daviesgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'data',
    'education',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'flores-ltd',
  'name': 'Flores Ltd',
  'description': 'Hair high health head our several gas member across.',
  'category': 'music',
  'url': 'https://floresltd.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'recipe',
    'analysis',
    'education',
    'ai'
  ]
},
  {
  'id': 'sullivan-lopez',
  'name': 'Sullivan-Lopez',
  'description': 'Source employee strong everything Mr relationship human left central leave teach.',
  'category': 'cooking',
  'url': 'https://sullivan-lopez.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'search',
    'data',
    'productivity',
    'voice'
  ]
},
  {
  'id': 'bates-ltd',
  'name': 'Bates Ltd',
  'description': 'Thought subject inside person never effort involve help matter mind opportunity.',
  'category': 'chat',
  'url': 'https://batesltd.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'workflow',
    'video',
    'search',
    'design'
  ]
},
  {
  'id': 'christensen-mccullough-and-nguyen',
  'name': 'Christensen, Mccullough and Nguyen',
  'description': 'Agree person station knowledge character would mind exist check radio public.',
  'category': 'presentations',
  'url': 'https://christensen,mcculloughandnguyen.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'data',
    'voice',
    'recipe',
    'search'
  ]
},
  {
  'id': 'burnett-group',
  'name': 'Burnett Group',
  'description': 'Available expect have pick win five hope position himself food form black stand.',
  'category': 'web',
  'url': 'https://burnettgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'music',
    'data',
    'chatbot',
    'ai'
  ]
},
  {
  'id': 'roberts-lee-and-morris',
  'name': 'Roberts, Lee and Morris',
  'description': 'Dream military century young issue stand.',
  'category': 'audio',
  'url': 'https://roberts,leeandmorris.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'workflow',
    'recipe',
    'design',
    'search'
  ]
},
  {
  'id': 'charles-chan',
  'name': 'Charles-Chan',
  'description': 'Her which realize catch appear assume.',
  'category': 'creativity',
  'url': 'https://charles-chan.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'ai',
    'video',
    'creative',
    'voice'
  ]
},
  {
  'id': 'caldwell-fox-and-jones',
  'name': 'Caldwell, Fox and Jones',
  'description': 'Remember large modern ok particularly least bring else such.',
  'category': 'image',
  'url': 'https://caldwell,foxandjones.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'recipe',
    'workflow',
    'voice',
    'automation'
  ]
},
  {
  'id': 'marshall-ltd',
  'name': 'Marshall Ltd',
  'description': 'Condition car window meet card station rule staff key resource help him ago.',
  'category': 'writing',
  'url': 'https://marshallltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'recipe',
    'productivity',
    'education',
    'ai'
  ]
},
  {
  'id': 'curry-warner-and-campbell',
  'name': 'Curry, Warner and Campbell',
  'description': 'Either dog star all owner bed middle.',
  'category': 'audio',
  'url': 'https://curry,warnerandcampbell.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'voice',
    'image',
    'design',
    'video'
  ]
},
  {
  'id': 'armstrong-crawford',
  'name': 'Armstrong-Crawford',
  'description': 'Foreign return team exist whole into finish in should choice interview.',
  'category': 'web',
  'url': 'https://armstrong-crawford.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'analysis',
    'search',
    'data',
    'ai'
  ]
},
  {
  'id': 'bright-gray-and-patterson',
  'name': 'Bright, Gray and Patterson',
  'description': 'Sister professor word possible hospital officer recent discover body art.',
  'category': 'music',
  'url': 'https://bright,grayandpatterson.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'recipe',
    'ai',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'sawyer-gonzalez-and-parrish',
  'name': 'Sawyer, Gonzalez and Parrish',
  'description': 'Nation myself series factor change reason role impact reflect employee.',
  'category': 'learning',
  'url': 'https://sawyer,gonzalezandparrish.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'productivity',
    'data',
    'design',
    'music'
  ]
},
  {
  'id': 'anderson-group',
  'name': 'Anderson Group',
  'description': 'Decision sit hit her scene part itself but Mr among chance.',
  'category': 'web',
  'url': 'https://andersongroup.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'recipe',
    'creative',
    'productivity',
    'design'
  ]
},
  {
  'id': 'green-conley-and-foley',
  'name': 'Green, Conley and Foley',
  'description': 'Race course individual movie state east know drop show write surface resource.',
  'category': 'creativity',
  'url': 'https://green,conleyandfoley.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'creative',
    'recipe',
    'music',
    'chatbot'
  ]
},
  {
  'id': 'lewis-moore',
  'name': 'Lewis-Moore',
  'description': 'Drug would determine discussion accept nice old right why.',
  'category': 'web',
  'url': 'https://lewis-moore.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'education',
    'search',
    'video',
    'chatbot'
  ]
},
  {
  'id': 'clarke-erickson-and-brown',
  'name': 'Clarke, Erickson and Brown',
  'description': 'Growth heavy laugh history until especially agency hotel land network culture.',
  'category': 'productivity',
  'url': 'https://clarke,ericksonandbrown.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'video',
    'recipe',
    'chatbot',
    'music'
  ]
},
  {
  'id': 'robinson-ltd',
  'name': 'Robinson Ltd',
  'description': 'Science police travel because space government history key about happen.',
  'category': 'music',
  'url': 'https://robinsonltd.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'music',
    'analysis',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'gutierrez-young-and-bryan',
  'name': 'Gutierrez, Young and Bryan',
  'description': 'Memory get tree blood four ten remain structure condition approach shoulder himself.',
  'category': 'music',
  'url': 'https://gutierrez,youngandbryan.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'video',
    'data',
    'image',
    'automation'
  ]
},
  {
  'id': 'rodriguez-plc',
  'name': 'Rodriguez PLC',
  'description': 'Know threat four card tell how account.',
  'category': 'music',
  'url': 'https://rodriguezplc.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'automation',
    'data',
    'video',
    'creative'
  ]
},
  {
  'id': 'smith-curry-and-pacheco',
  'name': 'Smith, Curry and Pacheco',
  'description': 'Choice skin finally start stuff success case argue.',
  'category': 'learning',
  'url': 'https://smith,curryandpacheco.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'education',
    'music',
    'voice',
    'search'
  ]
},
  {
  'id': 'johnson-steele-and-lyons',
  'name': 'Johnson, Steele and Lyons',
  'description': 'Surface alone policy place mention medical word use quite specific six.',
  'category': 'data',
  'url': 'https://johnson,steeleandlyons.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'video',
    'education',
    'data',
    'ai'
  ]
},
  {
  'id': 'zhang-llc',
  'name': 'Zhang LLC',
  'description': 'Hair onto him summer grow green fund network fish side so.',
  'category': 'chat',
  'url': 'https://zhangllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'automation',
    'productivity',
    'education',
    'design'
  ]
},
  {
  'id': 'mcmahon-ford',
  'name': 'Mcmahon-Ford',
  'description': 'Field opportunity approach suffer firm most wall.',
  'category': 'image',
  'url': 'https://mcmahon-ford.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'image',
    'recipe',
    'music',
    'video'
  ]
},
  {
  'id': 'macias-ltd',
  'name': 'Macias Ltd',
  'description': 'Large table long single mean out human hard go.',
  'category': 'design',
  'url': 'https://maciasltd.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'ai',
    'data',
    'search',
    'design'
  ]
},
  {
  'id': 'sanchez-garcia-and-bowman',
  'name': 'Sanchez, Garcia and Bowman',
  'description': 'Firm market focus other I cell response.',
  'category': 'learning',
  'url': 'https://sanchez,garciaandbowman.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'automation',
    'design',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'rodriguez-sutton',
  'name': 'Rodriguez-Sutton',
  'description': 'Police million painting blood blue girl above police religious loss.',
  'category': 'chat',
  'url': 'https://rodriguez-sutton.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'chatbot',
    'ai',
    'voice',
    'automation'
  ]
},
  {
  'id': 'alvarado-bradley',
  'name': 'Alvarado-Bradley',
  'description': 'Music green modern sing fill teach fish despite.',
  'category': 'chat',
  'url': 'https://alvarado-bradley.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'productivity',
    'recipe',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'leon-brewer',
  'name': 'Leon-Brewer',
  'description': 'Attack top season attorney camera maybe compare baby ball group.',
  'category': 'coding',
  'url': 'https://leon-brewer.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'education',
    'image',
    'recipe',
    'data'
  ]
},
  {
  'id': 'mcintyre-nichols',
  'name': 'Mcintyre-Nichols',
  'description': 'Statement popular college surface yard term explain prove director radio member through.',
  'category': 'video',
  'url': 'https://mcintyre-nichols.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'voice',
    'creative',
    'automation',
    'chatbot'
  ]
},
  {
  'id': 'watson-inc',
  'name': 'Watson Inc',
  'description': 'Local edge play enjoy southern two radio will.',
  'category': 'web',
  'url': 'https://watsoninc.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'creative',
    'voice',
    'education',
    'recipe'
  ]
},
  {
  'id': 'lane-group',
  'name': 'Lane Group',
  'description': 'Shake a speak doctor business probably mean they their.',
  'category': 'workflow',
  'url': 'https://lanegroup.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'design',
    'music',
    'workflow',
    'data'
  ]
},
  {
  'id': 'perez-beasley',
  'name': 'Perez-Beasley',
  'description': 'Hair thank mother recently bed own probably sell face member item.',
  'category': 'audio',
  'url': 'https://perez-beasley.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'search',
    'data',
    'design',
    'image'
  ]
},
  {
  'id': 'moore-ltd',
  'name': 'Moore Ltd',
  'description': 'Pressure any power second down family foreign surface sound market here church attack.',
  'category': 'automation',
  'url': 'https://mooreltd.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'search',
    'analysis',
    'music',
    'education'
  ]
},
  {
  'id': 'jones-thomas-and-valdez',
  'name': 'Jones, Thomas and Valdez',
  'description': 'Place story college win add push.',
  'category': 'video',
  'url': 'https://jones,thomasandvaldez.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'ai',
    'recipe',
    'design',
    'video'
  ]
},
  {
  'id': 'mills-group',
  'name': 'Mills Group',
  'description': 'Major bank part performance read church build.',
  'category': 'workflow',
  'url': 'https://millsgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'search',
    'education',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'nielsen-walker-and-williamson',
  'name': 'Nielsen, Walker and Williamson',
  'description': 'Figure thought animal adult unit arrive fear site region sort.',
  'category': 'audio',
  'url': 'https://nielsen,walkerandwilliamson.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'productivity',
    'music',
    'education',
    'design'
  ]
},
  {
  'id': 'lopez-ltd',
  'name': 'Lopez Ltd',
  'description': 'Interview lead course everybody increase mean bank wife soldier example together high.',
  'category': 'chat',
  'url': 'https://lopezltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'search',
    'video',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'davis-jones-and-jackson',
  'name': 'Davis, Jones and Jackson',
  'description': 'Run never also simply rock skin from blue.',
  'category': 'presentations',
  'url': 'https://davis,jonesandjackson.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'automation',
    'creative',
    'video',
    'image'
  ]
},
  {
  'id': 'meyers-olson-and-hendricks',
  'name': 'Meyers, Olson and Hendricks',
  'description': 'Treat also nation learn continue employee central somebody against.',
  'category': 'ideas',
  'url': 'https://meyers,olsonandhendricks.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'creative',
    'music',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'dennis-white-and-harris',
  'name': 'Dennis, White and Harris',
  'description': 'City democratic central property material finish arrive look season reality full.',
  'category': 'ideas',
  'url': 'https://dennis,whiteandharris.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'search',
    'music',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'gomez-jennings-and-stewart',
  'name': 'Gomez, Jennings and Stewart',
  'description': 'My toward bit foreign guy will audience daughter unit their by commercial.',
  'category': 'video',
  'url': 'https://gomez,jenningsandstewart.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'design',
    'creative',
    'ai',
    'chatbot'
  ]
},
  {
  'id': 'shaffer-petty',
  'name': 'Shaffer-Petty',
  'description': 'Its article research truth unit statement could movie or human senior.',
  'category': 'music',
  'url': 'https://shaffer-petty.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'automation',
    'education',
    'productivity',
    'workflow'
  ]
},
  {
  'id': 'booth-and-sons',
  'name': 'Booth and Sons',
  'description': 'So seek three policy fish wonder care.',
  'category': 'social',
  'url': 'https://boothandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'image',
    'music',
    'voice',
    'video'
  ]
},
  {
  'id': 'bryan-group',
  'name': 'Bryan Group',
  'description': 'Career which certain address population happy mention tax human find.',
  'category': 'chat',
  'url': 'https://bryangroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'workflow',
    'design',
    'creative',
    'search'
  ]
},
  {
  'id': 'wilkinson-llc',
  'name': 'Wilkinson LLC',
  'description': 'Ability sense class difficult career brother they cause situation often.',
  'category': 'productivity',
  'url': 'https://wilkinsonllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'music',
    'automation',
    'creative',
    'search'
  ]
},
  {
  'id': 'burns-llc',
  'name': 'Burns LLC',
  'description': 'However home process season memory tell over.',
  'category': 'image',
  'url': 'https://burnsllc.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'productivity',
    'education',
    'design',
    'music'
  ]
},
  {
  'id': 'kim-ltd',
  'name': 'Kim Ltd',
  'description': 'Pattern fact foot chance help prove that month very.',
  'category': 'image',
  'url': 'https://kimltd.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'voice',
    'productivity',
    'education',
    'image'
  ]
},
  {
  'id': 'logan-baldwin-and-davis',
  'name': 'Logan, Baldwin and Davis',
  'description': 'Interest war party do note party since whom floor exist bill other.',
  'category': 'video',
  'url': 'https://logan,baldwinanddavis.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'automation',
    'voice',
    'image',
    'creative'
  ]
},
  {
  'id': 'campbell-le-and-casey',
  'name': 'Campbell, Le and Casey',
  'description': 'Up create lawyer available list officer leader know partner decade themselves end.',
  'category': 'automation',
  'url': 'https://campbell,leandcasey.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'productivity',
    'recipe',
    'chatbot',
    'voice'
  ]
},
  {
  'id': 'raymond-gaines',
  'name': 'Raymond-Gaines',
  'description': 'Summer hold coach test threat rate professional blood theory line rate student.',
  'category': 'design',
  'url': 'https://raymond-gaines.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'ai',
    'video',
    'recipe',
    'image'
  ]
},
  {
  'id': 'campbell-stone',
  'name': 'Campbell-Stone',
  'description': 'Class concern commercial center step matter face fine read per measure whatever trouble.',
  'category': 'music',
  'url': 'https://campbell-stone.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'productivity',
    'ai',
    'voice',
    'analysis'
  ]
},
  {
  'id': 'scott-mcdaniel',
  'name': 'Scott-Mcdaniel',
  'description': 'Type know industry all choice several add behind worker player amount.',
  'category': 'search',
  'url': 'https://scott-mcdaniel.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'workflow',
    'voice',
    'design',
    'video'
  ]
},
  {
  'id': 'martin-group',
  'name': 'Martin Group',
  'description': 'Above out per inside Congress ahead model begin.',
  'category': 'design',
  'url': 'https://martingroup.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'design',
    'productivity',
    'image',
    'data'
  ]
},
  {
  'id': 'wilson-baldwin-and-chapman',
  'name': 'Wilson, Baldwin and Chapman',
  'description': 'Color management impact serve according year suffer third number market.',
  'category': 'learning',
  'url': 'https://wilson,baldwinandchapman.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'search',
    'automation',
    'voice',
    'workflow'
  ]
},
  {
  'id': 'lopez-herrera',
  'name': 'Lopez-Herrera',
  'description': 'Story rule mean raise hope travel name far than system.',
  'category': 'image',
  'url': 'https://lopez-herrera.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'education',
    'productivity',
    'analysis',
    'data'
  ]
},
  {
  'id': 'bishop-wong',
  'name': 'Bishop-Wong',
  'description': 'Alone control year myself head change firm water gas minute side others.',
  'category': 'learning',
  'url': 'https://bishop-wong.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'chatbot',
    'image',
    'voice',
    'data'
  ]
},
  {
  'id': 'cruz-plc',
  'name': 'Cruz PLC',
  'description': 'Risk interest generation early strong level risk civil share.',
  'category': 'data',
  'url': 'https://cruzplc.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'education',
    'productivity',
    'voice',
    'ai'
  ]
},
  {
  'id': 'barber-and-sons',
  'name': 'Barber and Sons',
  'description': 'Center amount artist material computer listen evidence address study least focus fear.',
  'category': 'cooking',
  'url': 'https://barberandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'music',
    'recipe',
    'creative',
    'data'
  ]
},
  {
  'id': 'thompson-and-sons',
  'name': 'Thompson and Sons',
  'description': 'Someone own market section small day consumer trial consider.',
  'category': 'search',
  'url': 'https://thompsonandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'education',
    'analysis',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'henry-shepherd-and-shaffer',
  'name': 'Henry, Shepherd and Shaffer',
  'description': 'Fear establish career teach detail pull political maybe TV.',
  'category': 'ideas',
  'url': 'https://henry,shepherdandshaffer.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'image',
    'video',
    'search',
    'recipe'
  ]
},
  {
  'id': 'richardson-costa-and-dickson',
  'name': 'Richardson, Costa and Dickson',
  'description': 'Effort drive see attack service field few of.',
  'category': 'audio',
  'url': 'https://richardson,costaanddickson.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'education',
    'search',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'lopez-harris-and-campos',
  'name': 'Lopez, Harris and Campos',
  'description': 'Friend rule factor enter spend girl travel ability result explain participant someone most.',
  'category': 'data',
  'url': 'https://lopez,harrisandcampos.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'design',
    'image',
    'music',
    'education'
  ]
},
  {
  'id': 'mitchell-hughes-and-curtis',
  'name': 'Mitchell, Hughes and Curtis',
  'description': 'Determine trial thank air from term address but foot follow.',
  'category': 'cooking',
  'url': 'https://mitchell,hughesandcurtis.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'video',
    'productivity',
    'music',
    'creative'
  ]
},
  {
  'id': 'jackson-shepherd-and-williams',
  'name': 'Jackson, Shepherd and Williams',
  'description': 'Moment program drug seven cell TV hundred plan environment enter particularly daughter.',
  'category': 'image',
  'url': 'https://jackson,shepherdandwilliams.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'creative',
    'ai',
    'design',
    'productivity'
  ]
},
  {
  'id': 'molina-garcia',
  'name': 'Molina-Garcia',
  'description': 'Any nature rather military record training better fast student per far.',
  'category': 'cooking',
  'url': 'https://molina-garcia.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'workflow',
    'ai',
    'education',
    'automation'
  ]
},
  {
  'id': 'smith-goodman-and-santos',
  'name': 'Smith, Goodman and Santos',
  'description': 'Bag affect rule fish economic attorney late officer skin I painting.',
  'category': 'workflow',
  'url': 'https://smith,goodmanandsantos.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'design',
    'productivity',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'lopez-plc',
  'name': 'Lopez PLC',
  'description': 'Our report high say every speak boy same five.',
  'category': 'video',
  'url': 'https://lopezplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'data',
    'video',
    'workflow',
    'design'
  ]
},
  {
  'id': 'morse-allen',
  'name': 'Morse-Allen',
  'description': 'Air pass several animal less those often whole sort far lose.',
  'category': 'productivity',
  'url': 'https://morse-allen.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'music',
    'education',
    'analysis',
    'data'
  ]
},
  {
  'id': 'riley-welch-and-kennedy',
  'name': 'Riley, Welch and Kennedy',
  'description': 'Official surface across voice gas indeed number Congress unit cup health door.',
  'category': 'customer',
  'url': 'https://riley,welchandkennedy.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'image',
    'search',
    'music',
    'video'
  ]
},
  {
  'id': 'ritter-maxwell-and-stevens',
  'name': 'Ritter, Maxwell and Stevens',
  'description': 'Fight several anything indicate stage customer.',
  'category': 'cooking',
  'url': 'https://ritter,maxwellandstevens.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'recipe',
    'automation',
    'creative',
    'chatbot'
  ]
},
  {
  'id': 'ray-garcia-and-larson',
  'name': 'Ray, Garcia and Larson',
  'description': 'Exist couple sell expect environmental already political.',
  'category': 'customer',
  'url': 'https://ray,garciaandlarson.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'workflow',
    'education',
    'recipe',
    'voice'
  ]
},
  {
  'id': 'dillon-group',
  'name': 'Dillon Group',
  'description': 'Sing board be season country writer far employee side use inside.',
  'category': 'learning',
  'url': 'https://dillongroup.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'analysis',
    'image',
    'search',
    'workflow'
  ]
},
  {
  'id': 'brown-smith',
  'name': 'Brown-Smith',
  'description': 'Can nation still after everybody onto since.',
  'category': 'automation',
  'url': 'https://brown-smith.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'ai',
    'search',
    'recipe',
    'image'
  ]
},
  {
  'id': 'jarvis-fisher',
  'name': 'Jarvis-Fisher',
  'description': 'Sign party require seven already at move listen.',
  'category': 'search',
  'url': 'https://jarvis-fisher.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'music',
    'design',
    'data',
    'education'
  ]
},
  {
  'id': 'herrera-vasquez-and-thornton',
  'name': 'Herrera, Vasquez and Thornton',
  'description': 'While pretty let quite always term fire fund several contain national crime professor.',
  'category': 'workflow',
  'url': 'https://herrera,vasquezandthornton.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'chatbot',
    'video',
    'image',
    'education'
  ]
},
  {
  'id': 'taylor-hudson-and-huffman',
  'name': 'Taylor, Hudson and Huffman',
  'description': 'Wonder hear threat process air future surface road man magazine.',
  'category': 'customer',
  'url': 'https://taylor,hudsonandhuffman.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'workflow',
    'search',
    'productivity',
    'image'
  ]
},
  {
  'id': 'cook-atkins',
  'name': 'Cook-Atkins',
  'description': 'Blood believe executive coach instead glass natural upon design.',
  'category': 'image',
  'url': 'https://cook-atkins.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'automation',
    'data',
    'image',
    'workflow'
  ]
},
  {
  'id': 'edwards-bowman',
  'name': 'Edwards-Bowman',
  'description': 'Bed direction wrong ability great performance main.',
  'category': 'social',
  'url': 'https://edwards-bowman.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'video',
    'automation',
    'design',
    'creative'
  ]
},
  {
  'id': 'lewis-plc',
  'name': 'Lewis PLC',
  'description': 'Kitchen support true another something listen exactly charge subject goal tell arm.',
  'category': 'web',
  'url': 'https://lewisplc.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'image',
    'education',
    'voice',
    'automation'
  ]
},
  {
  'id': 'richardson-inc',
  'name': 'Richardson Inc',
  'description': 'Crime senior short conference tax short understand special miss better.',
  'category': 'research',
  'url': 'https://richardsoninc.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'analysis',
    'voice',
    'ai',
    'video'
  ]
},
  {
  'id': 'wagner-phillips',
  'name': 'Wagner-Phillips',
  'description': 'Respond describe change him determine wait machine but front tell same story.',
  'category': 'coding',
  'url': 'https://wagner-phillips.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'video',
    'creative',
    'image',
    'voice'
  ]
},
  {
  'id': 'leblanc-jackson-and-pope',
  'name': 'Leblanc, Jackson and Pope',
  'description': 'Industry dinner there white try human.',
  'category': 'music',
  'url': 'https://leblanc,jacksonandpope.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'ai',
    'image',
    'video',
    'design'
  ]
},
  {
  'id': 'smith-villegas',
  'name': 'Smith-Villegas',
  'description': 'Open individual with important up amount claim apply.',
  'category': 'creativity',
  'url': 'https://smith-villegas.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'education',
    'video',
    'music',
    'voice'
  ]
},
  {
  'id': 'price-ltd',
  'name': 'Price Ltd',
  'description': 'Campaign reduce identify better lead seek rather cover professional ball international.',
  'category': 'research',
  'url': 'https://priceltd.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'ai',
    'search',
    'voice',
    'data'
  ]
},
  {
  'id': 'gallagher-gardner-and-smith',
  'name': 'Gallagher, Gardner and Smith',
  'description': 'Step want involve expect environmental white citizen.',
  'category': 'learning',
  'url': 'https://gallagher,gardnerandsmith.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'automation',
    'productivity',
    'image',
    'design'
  ]
},
  {
  'id': 'herrera-wallace',
  'name': 'Herrera-Wallace',
  'description': 'Administration than describe trial edge deep animal protect.',
  'category': 'chat',
  'url': 'https://herrera-wallace.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'image',
    'video',
    'music',
    'chatbot'
  ]
},
  {
  'id': 'townsend-hinton',
  'name': 'Townsend-Hinton',
  'description': 'Mother room threat provide direction debate face.',
  'category': 'ideas',
  'url': 'https://townsend-hinton.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'education',
    'workflow',
    'automation',
    'music'
  ]
},
  {
  'id': 'clark-inc',
  'name': 'Clark Inc',
  'description': 'Leader home check message mention high.',
  'category': 'learning',
  'url': 'https://clarkinc.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'image',
    'education',
    'workflow',
    'design'
  ]
},
  {
  'id': 'dudley-stevens-and-collins',
  'name': 'Dudley, Stevens and Collins',
  'description': 'Floor knowledge I standard raise mean effect long whatever history western than.',
  'category': 'audio',
  'url': 'https://dudley,stevensandcollins.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'search',
    'chatbot',
    'design',
    'analysis'
  ]
},
  {
  'id': 'scott-group',
  'name': 'Scott Group',
  'description': 'Finally her task do send interesting teacher church pull.',
  'category': 'writing',
  'url': 'https://scottgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'productivity',
    'ai',
    'education',
    'search'
  ]
},
  {
  'id': 'mendez-cook',
  'name': 'Mendez-Cook',
  'description': 'Around when customer either toward which kid machine people hundred.',
  'category': 'research',
  'url': 'https://mendez-cook.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'creative',
    'education',
    'ai',
    'video'
  ]
},
  {
  'id': 'velazquez-newman-and-murray',
  'name': 'Velazquez, Newman and Murray',
  'description': 'Skin music will sure key interesting sort box fight visit blue traditional though.',
  'category': 'learning',
  'url': 'https://velazquez,newmanandmurray.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'video',
    'productivity',
    'ai',
    'recipe'
  ]
},
  {
  'id': 'castaneda-morris-and-porter',
  'name': 'Castaneda, Morris and Porter',
  'description': 'Bag skin production perform few difficult check under.',
  'category': 'data',
  'url': 'https://castaneda,morrisandporter.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'workflow',
    'video',
    'music'
  ]
},
  {
  'id': 'snow-saunders-and-lopez',
  'name': 'Snow, Saunders and Lopez',
  'description': 'Building hundred season significant wide hold will pressure certainly evidence require.',
  'category': 'automation',
  'url': 'https://snow,saundersandlopez.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'music',
    'automation',
    'productivity',
    'workflow'
  ]
},
  {
  'id': 'james-mack-and-norris',
  'name': 'James, Mack and Norris',
  'description': 'Environment window in available who anyone their begin clear story.',
  'category': 'productivity',
  'url': 'https://james,mackandnorris.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'chatbot',
    'voice',
    'video',
    'search'
  ]
},
  {
  'id': 'hernandez-murphy-and-blake',
  'name': 'Hernandez, Murphy and Blake',
  'description': 'Party bag son almost interest him.',
  'category': 'audio',
  'url': 'https://hernandez,murphyandblake.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'ai',
    'image',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'schmidt-young',
  'name': 'Schmidt-Young',
  'description': 'Per home lot whose power air true still beat you sister near professor.',
  'category': 'creativity',
  'url': 'https://schmidt-young.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'search',
    'chatbot',
    'workflow',
    'recipe'
  ]
},
  {
  'id': 'jimenez-thompson',
  'name': 'Jimenez-Thompson',
  'description': 'Half add owner front check feeling dinner agent sense government.',
  'category': 'social',
  'url': 'https://jimenez-thompson.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'recipe',
    'analysis',
    'education',
    'voice'
  ]
},
  {
  'id': 'cortez-tran-and-anderson',
  'name': 'Cortez, Tran and Anderson',
  'description': 'Law present page assume maybe improve.',
  'category': 'writing',
  'url': 'https://cortez,tranandanderson.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'productivity',
    'chatbot',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'baker-davis-and-brooks',
  'name': 'Baker, Davis and Brooks',
  'description': 'Us trip avoid nothing deep set for cell beat lose red itself.',
  'category': 'coding',
  'url': 'https://baker,davisandbrooks.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'chatbot',
    'data',
    'voice',
    'ai'
  ]
},
  {
  'id': 'howell-davis',
  'name': 'Howell-Davis',
  'description': 'Huge usually everything among audience threat.',
  'category': 'design',
  'url': 'https://howell-davis.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'design',
    'workflow',
    'video',
    'automation'
  ]
},
  {
  'id': 'jones-plc',
  'name': 'Jones PLC',
  'description': 'Fish everything sit music method research explain none section nor mind.',
  'category': 'coding',
  'url': 'https://jonesplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'music',
    'education',
    'workflow',
    'analysis'
  ]
},
  {
  'id': 'flores-stephenson',
  'name': 'Flores-Stephenson',
  'description': 'Town big place strong they term night might.',
  'category': 'workflow',
  'url': 'https://flores-stephenson.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'workflow',
    'automation',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'gonzales-price',
  'name': 'Gonzales-Price',
  'description': 'Run product artist heart during however source.',
  'category': 'search',
  'url': 'https://gonzales-price.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'education',
    'analysis',
    'music',
    'productivity'
  ]
},
  {
  'id': 'macias-cohen',
  'name': 'Macias-Cohen',
  'description': 'Forward risk know simply turn plan consider among writer.',
  'category': 'coding',
  'url': 'https://macias-cohen.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'voice',
    'ai',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'baker-dunn',
  'name': 'Baker-Dunn',
  'description': 'Happy yeah late rule market money.',
  'category': 'presentations',
  'url': 'https://baker-dunn.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'analysis',
    'education',
    'workflow',
    'data'
  ]
},
  {
  'id': 'jarvis-alvarez',
  'name': 'Jarvis-Alvarez',
  'description': 'East guy program choice politics physical.',
  'category': 'data',
  'url': 'https://jarvis-alvarez.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'video',
    'automation',
    'design',
    'voice'
  ]
},
  {
  'id': 'vargas-powell-and-brown',
  'name': 'Vargas, Powell and Brown',
  'description': 'Give if probably water into world.',
  'category': 'social',
  'url': 'https://vargas,powellandbrown.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'music',
    'workflow',
    'education',
    'search'
  ]
},
  {
  'id': 'harris-inc',
  'name': 'Harris Inc',
  'description': 'Task large expert another require anyone kitchen lay.',
  'category': 'productivity',
  'url': 'https://harrisinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'education',
    'analysis',
    'ai',
    'image'
  ]
},
  {
  'id': 'lloyd-group',
  'name': 'Lloyd Group',
  'description': 'Base conference mouth myself little environmental decision true.',
  'category': 'image',
  'url': 'https://lloydgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'recipe',
    'voice',
    'analysis',
    'automation'
  ]
},
  {
  'id': 'hawkins-garrett',
  'name': 'Hawkins-Garrett',
  'description': 'Follow control night garden century position.',
  'category': 'writing',
  'url': 'https://hawkins-garrett.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'productivity',
    'analysis',
    'music',
    'chatbot'
  ]
},
  {
  'id': 'carson-alvarez-and-holmes',
  'name': 'Carson, Alvarez and Holmes',
  'description': 'South us site each case only think.',
  'category': 'search',
  'url': 'https://carson,alvarezandholmes.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'recipe',
    'video',
    'design',
    'automation'
  ]
},
  {
  'id': 'contreras-burnett-and-chen',
  'name': 'Contreras, Burnett and Chen',
  'description': 'Store machine now some us serious beyond.',
  'category': 'presentations',
  'url': 'https://contreras,burnettandchen.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'productivity',
    'image',
    'data',
    'education'
  ]
},
  {
  'id': 'fernandez-alvarez-and-morse',
  'name': 'Fernandez, Alvarez and Morse',
  'description': 'Purpose major pay own floor into message.',
  'category': 'music',
  'url': 'https://fernandez,alvarezandmorse.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'productivity',
    'analysis',
    'automation',
    'creative'
  ]
},
  {
  'id': 'rodriguez-inc',
  'name': 'Rodriguez Inc',
  'description': 'Development collection view class office plant black beautiful culture Mrs stock.',
  'category': 'search',
  'url': 'https://rodriguezinc.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'creative',
    'design',
    'video',
    'data'
  ]
},
  {
  'id': 'atkinson-nielsen',
  'name': 'Atkinson-Nielsen',
  'description': 'Score Mr rest military end fire former speech audience word.',
  'category': 'search',
  'url': 'https://atkinson-nielsen.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'recipe',
    'video',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'clark-galloway',
  'name': 'Clark-Galloway',
  'description': 'Learn hold third forward receive should strong technology remain human information everybody.',
  'category': 'video',
  'url': 'https://clark-galloway.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'search',
    'recipe',
    'workflow',
    'automation'
  ]
},
  {
  'id': 'mcdonald-group',
  'name': 'Mcdonald Group',
  'description': 'Smile fight herself investment it skin special.',
  'category': 'automation',
  'url': 'https://mcdonaldgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'creative',
    'image',
    'recipe',
    'ai'
  ]
},
  {
  'id': 'moore-kane-and-olson',
  'name': 'Moore, Kane and Olson',
  'description': 'Show population line performance already easy protect child soon them throughout.',
  'category': 'data',
  'url': 'https://moore,kaneandolson.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'search',
    'education',
    'recipe',
    'chatbot'
  ]
},
  {
  'id': 'mack-thompson-and-jones',
  'name': 'Mack, Thompson and Jones',
  'description': 'Small dark school behind where wide care hold.',
  'category': 'creativity',
  'url': 'https://mack,thompsonandjones.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'productivity',
    'recipe',
    'ai',
    'image'
  ]
},
  {
  'id': 'prince-mcneil-and-bernard',
  'name': 'Prince, Mcneil and Bernard',
  'description': 'Break let project list investment perform manager world.',
  'category': 'social',
  'url': 'https://prince,mcneilandbernard.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'chatbot',
    'ai',
    'search',
    'image'
  ]
},
  {
  'id': 'pope-plc',
  'name': 'Pope PLC',
  'description': 'Whatever summer like management not class small.',
  'category': 'data',
  'url': 'https://popeplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'analysis',
    'video',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'mcconnell-group',
  'name': 'Mcconnell Group',
  'description': 'Talk energy bring ball time notice or air fact.',
  'category': 'web',
  'url': 'https://mcconnellgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'video',
    'recipe',
    'search',
    'music'
  ]
},
  {
  'id': 'reyes-alexander-and-padilla',
  'name': 'Reyes, Alexander and Padilla',
  'description': 'Against not region feeling try similar customer.',
  'category': 'writing',
  'url': 'https://reyes,alexanderandpadilla.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'video',
    'creative',
    'education',
    'search'
  ]
},
  {
  'id': 'miller-miller',
  'name': 'Miller-Miller',
  'description': 'Should watch memory treat movie though admit.',
  'category': 'research',
  'url': 'https://miller-miller.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'data',
    'education',
    'video',
    'workflow'
  ]
},
  {
  'id': 'phillips-schwartz-and-meyer',
  'name': 'Phillips, Schwartz and Meyer',
  'description': 'Enter significant open social southern place.',
  'category': 'music',
  'url': 'https://phillips,schwartzandmeyer.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'chatbot',
    'recipe',
    'analysis',
    'automation'
  ]
},
  {
  'id': 'swanson-rice-and-weaver',
  'name': 'Swanson, Rice and Weaver',
  'description': 'Box matter person increase feeling allow know actually project city consumer.',
  'category': 'workflow',
  'url': 'https://swanson,riceandweaver.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'education',
    'analysis',
    'search',
    'voice'
  ]
},
  {
  'id': 'oliver-inc',
  'name': 'Oliver Inc',
  'description': 'Point them make night I movie concern.',
  'category': 'productivity',
  'url': 'https://oliverinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'search',
    'data',
    'video',
    'productivity'
  ]
},
  {
  'id': 'hunt-group',
  'name': 'Hunt Group',
  'description': 'Decision seek parent another movie idea television necessary environment exactly never.',
  'category': 'image',
  'url': 'https://huntgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'recipe',
    'search',
    'education',
    'ai'
  ]
},
  {
  'id': 'doyle-inc',
  'name': 'Doyle Inc',
  'description': 'He will candidate friend old realize expect.',
  'category': 'cooking',
  'url': 'https://doyleinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'data',
    'recipe',
    'analysis',
    'search'
  ]
},
  {
  'id': 'russell-mitchell-and-brown',
  'name': 'Russell, Mitchell and Brown',
  'description': 'Reduce month turn Republican eat these yes understand example.',
  'category': 'ideas',
  'url': 'https://russell,mitchellandbrown.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'data',
    'ai',
    'productivity',
    'video'
  ]
},
  {
  'id': 'montgomery-burton-and-tucker',
  'name': 'Montgomery, Burton and Tucker',
  'description': 'Develop edge drop fight exist its develop idea high room meet.',
  'category': 'music',
  'url': 'https://montgomery,burtonandtucker.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'productivity',
    'creative',
    'search',
    'education'
  ]
},
  {
  'id': 'howell-hunter',
  'name': 'Howell-Hunter',
  'description': 'Though ok street enough remain continue.',
  'category': 'design',
  'url': 'https://howell-hunter.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'music',
    'productivity',
    'recipe',
    'automation'
  ]
},
  {
  'id': 'smith-plc',
  'name': 'Smith PLC',
  'description': 'Newspaper country last agency interest true gun consider camera court.',
  'category': 'video',
  'url': 'https://smithplc.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'creative',
    'education',
    'ai',
    'image'
  ]
},
  {
  'id': 'hall-watson-and-walker',
  'name': 'Hall, Watson and Walker',
  'description': 'Detail painting again floor safe way offer decision while rich project.',
  'category': 'learning',
  'url': 'https://hall,watsonandwalker.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'automation',
    'music',
    'image',
    'data'
  ]
},
  {
  'id': 'mcdonald-perry-and-smith',
  'name': 'Mcdonald, Perry and Smith',
  'description': 'Field blue such baby site teach television.',
  'category': 'cooking',
  'url': 'https://mcdonald,perryandsmith.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'image',
    'automation',
    'music',
    'data'
  ]
},
  {
  'id': 'allison-brooks',
  'name': 'Allison-Brooks',
  'description': 'Important room manager whom item peace those run between kid race field.',
  'category': 'productivity',
  'url': 'https://allison-brooks.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'productivity',
    'design',
    'recipe',
    'automation'
  ]
},
  {
  'id': 'jackson-pineda',
  'name': 'Jackson-Pineda',
  'description': 'Quality data thing painting ahead spend painting single north shoulder cultural support key.',
  'category': 'research',
  'url': 'https://jackson-pineda.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'voice',
    'analysis',
    'video',
    'education'
  ]
},
  {
  'id': 'miller-group',
  'name': 'Miller Group',
  'description': 'Woman turn expert much present near finally space seem call.',
  'category': 'ideas',
  'url': 'https://millergroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'search',
    'analysis',
    'voice',
    'automation'
  ]
},
  {
  'id': 'hinton-and-sons',
  'name': 'Hinton and Sons',
  'description': 'Training right finally either him happen process.',
  'category': 'coding',
  'url': 'https://hintonandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'recipe',
    'music',
    'education',
    'data'
  ]
},
  {
  'id': 'james-beasley-and-alexander',
  'name': 'James, Beasley and Alexander',
  'description': 'Different people street program bar finally air money.',
  'category': 'image',
  'url': 'https://james,beasleyandalexander.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'search',
    'music',
    'voice',
    'recipe'
  ]
},
  {
  'id': 'chapman-castaneda-and-black',
  'name': 'Chapman, Castaneda and Black',
  'description': 'Rich within white page when watch.',
  'category': 'coding',
  'url': 'https://chapman,castanedaandblack.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'automation',
    'design',
    'image',
    'analysis'
  ]
},
  {
  'id': 'macias-brooks',
  'name': 'Macias-Brooks',
  'description': 'Research system professor stock provide field town PM office military threat.',
  'category': 'cooking',
  'url': 'https://macias-brooks.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'video',
    'ai',
    'analysis',
    'education'
  ]
},
  {
  'id': 'peterson-holt',
  'name': 'Peterson-Holt',
  'description': 'Reality decade imagine investment wonder age in decade knowledge inside name read.',
  'category': 'productivity',
  'url': 'https://peterson-holt.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'chatbot',
    'ai',
    'design',
    'education'
  ]
},
  {
  'id': 'gonzalez-gates-and-martinez',
  'name': 'Gonzalez, Gates and Martinez',
  'description': 'Herself run author then strong time miss.',
  'category': 'presentations',
  'url': 'https://gonzalez,gatesandmartinez.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'recipe',
    'ai',
    'design',
    'music'
  ]
},
  {
  'id': 'hawkins-may-and-gonzalez',
  'name': 'Hawkins, May and Gonzalez',
  'description': 'Body son our couple sit product.',
  'category': 'data',
  'url': 'https://hawkins,mayandgonzalez.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'image',
    'search',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'wagner-short',
  'name': 'Wagner-Short',
  'description': 'Letter child since two much outside like best party.',
  'category': 'workflow',
  'url': 'https://wagner-short.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'productivity',
    'data',
    'ai',
    'image'
  ]
},
  {
  'id': 'clark-jones-and-ramos',
  'name': 'Clark, Jones and Ramos',
  'description': 'Sing town west state opportunity deep option successful lead half pressure past benefit.',
  'category': 'ideas',
  'url': 'https://clark,jonesandramos.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'automation',
    'analysis',
    'recipe',
    'music'
  ]
},
  {
  'id': 'lee-vasquez',
  'name': 'Lee-Vasquez',
  'description': 'Certainly join study successful effect hair project simple own ability act his.',
  'category': 'writing',
  'url': 'https://lee-vasquez.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'music',
    'ai',
    'productivity',
    'image'
  ]
},
  {
  'id': 'king-llc',
  'name': 'King LLC',
  'description': 'Whether red such bar fish industry through admit light less owner recently.',
  'category': 'research',
  'url': 'https://kingllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'creative',
    'video',
    'search',
    'voice'
  ]
},
  {
  'id': 'patterson-aguirre-and-clark',
  'name': 'Patterson, Aguirre and Clark',
  'description': 'Song administration catch science number move.',
  'category': 'presentations',
  'url': 'https://patterson,aguirreandclark.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'creative',
    'search',
    'education',
    'voice'
  ]
},
  {
  'id': 'mckay-clark-and-mcdaniel',
  'name': 'Mckay, Clark and Mcdaniel',
  'description': 'Stay red economic world daughter big book stop ahead.',
  'category': 'search',
  'url': 'https://mckay,clarkandmcdaniel.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'productivity',
    'video',
    'automation',
    'creative'
  ]
},
  {
  'id': 'johnson-plc',
  'name': 'Johnson PLC',
  'description': 'Provide official especially subject that miss hope son organization.',
  'category': 'search',
  'url': 'https://johnsonplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'ai',
    'data',
    'productivity',
    'video'
  ]
},
  {
  'id': 'hale-weaver-and-elliott',
  'name': 'Hale, Weaver and Elliott',
  'description': 'Man language stuff water performance according interesting piece central why sort.',
  'category': 'presentations',
  'url': 'https://hale,weaverandelliott.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'recipe',
    'music',
    'education',
    'chatbot'
  ]
},
  {
  'id': 'galvan-berg-and-clark',
  'name': 'Galvan, Berg and Clark',
  'description': 'Activity prevent generation protect safe floor detail project my decide.',
  'category': 'cooking',
  'url': 'https://galvan,bergandclark.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'workflow',
    'automation',
    'image',
    'productivity'
  ]
},
  {
  'id': 'acosta-group',
  'name': 'Acosta Group',
  'description': 'Wide detail idea behind hotel social.',
  'category': 'writing',
  'url': 'https://acostagroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'ai',
    'education',
    'productivity',
    'video'
  ]
},
  {
  'id': 'fisher-erickson-and-baker',
  'name': 'Fisher, Erickson and Baker',
  'description': 'Say whole draw owner enter reason popular market laugh size third must.',
  'category': 'image',
  'url': 'https://fisher,ericksonandbaker.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'voice',
    'productivity',
    'video',
    'search'
  ]
},
  {
  'id': 'freeman-perez-and-jones',
  'name': 'Freeman, Perez and Jones',
  'description': 'Next though church discussion memory yes likely material animal attorney effort less.',
  'category': 'customer',
  'url': 'https://freeman,perezandjones.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'automation',
    'ai',
    'music',
    'creative'
  ]
},
  {
  'id': 'jensen-group',
  'name': 'Jensen Group',
  'description': 'Program into pretty both across interest quality network say daughter organization particular.',
  'category': 'chat',
  'url': 'https://jensengroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'data',
    'design',
    'analysis',
    'music'
  ]
},
  {
  'id': 'collins-group',
  'name': 'Collins Group',
  'description': 'Special over court college traditional less relate moment group fly throughout in.',
  'category': 'customer',
  'url': 'https://collinsgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'recipe',
    'analysis',
    'voice',
    'data'
  ]
},
  {
  'id': 'wong-inc',
  'name': 'Wong Inc',
  'description': 'Long almost system address rest that.',
  'category': 'social',
  'url': 'https://wonginc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'design',
    'video',
    'image',
    'automation'
  ]
},
  {
  'id': 'hall-plc',
  'name': 'Hall PLC',
  'description': 'Nice protect TV it maybe step week hear agency past finally.',
  'category': 'chat',
  'url': 'https://hallplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'data',
    'education',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'skinner-and-sons',
  'name': 'Skinner and Sons',
  'description': 'Always training idea well rock together past try however.',
  'category': 'writing',
  'url': 'https://skinnerandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'workflow',
    'automation',
    'data',
    'design'
  ]
},
  {
  'id': 'bautista-plc',
  'name': 'Bautista PLC',
  'description': 'Health authority none assume effort require to laugh painting live cultural start.',
  'category': 'search',
  'url': 'https://bautistaplc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'search',
    'video',
    'ai',
    'automation'
  ]
},
  {
  'id': 'sloan-ltd',
  'name': 'Sloan Ltd',
  'description': 'Because human federal standard hotel morning region son really.',
  'category': 'presentations',
  'url': 'https://sloanltd.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'video',
    'creative',
    'recipe',
    'chatbot'
  ]
},
  {
  'id': 'patterson-group',
  'name': 'Patterson Group',
  'description': 'Agent avoid skin our parent degree type sense.',
  'category': 'social',
  'url': 'https://pattersongroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'search',
    'workflow',
    'creative',
    'data'
  ]
},
  {
  'id': 'baker-plc',
  'name': 'Baker PLC',
  'description': 'Dream others off mind process moment pick bit moment.',
  'category': 'creativity',
  'url': 'https://bakerplc.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'analysis',
    'automation',
    'music',
    'video'
  ]
},
  {
  'id': 'morris-williams-and-wright',
  'name': 'Morris, Williams and Wright',
  'description': 'Their rather drive hit beautiful down power tell back out line.',
  'category': 'learning',
  'url': 'https://morris,williamsandwright.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'productivity',
    'ai',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'lee-cook-and-peters',
  'name': 'Lee, Cook and Peters',
  'description': 'Newspaper lose trial several director religious.',
  'category': 'presentations',
  'url': 'https://lee,cookandpeters.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'search',
    'design',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'moses-and-sons',
  'name': 'Moses and Sons',
  'description': 'Maybe section whom whose left he bed bit already manager soldier.',
  'category': 'presentations',
  'url': 'https://mosesandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'automation',
    'analysis',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'miller-buck-and-garrison',
  'name': 'Miller, Buck and Garrison',
  'description': 'Into share computer material according card employee blue.',
  'category': 'chat',
  'url': 'https://miller,buckandgarrison.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'education',
    'analysis',
    'recipe',
    'creative'
  ]
},
  {
  'id': 'white-cooke-and-tran',
  'name': 'White, Cooke and Tran',
  'description': 'Morning whether year write check my miss.',
  'category': 'productivity',
  'url': 'https://white,cookeandtran.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'analysis',
    'search',
    'education',
    'video'
  ]
},
  {
  'id': 'love-ltd',
  'name': 'Love Ltd',
  'description': 'Report decide include week pay four.',
  'category': 'customer',
  'url': 'https://loveltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'ai',
    'design',
    'automation',
    'creative'
  ]
},
  {
  'id': 'greer-bailey-and-mccarty',
  'name': 'Greer, Bailey and Mccarty',
  'description': 'Only particular leader something decision rise understand.',
  'category': 'ideas',
  'url': 'https://greer,baileyandmccarty.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'recipe',
    'music',
    'creative',
    'analysis'
  ]
},
  {
  'id': 'murphy-hughes',
  'name': 'Murphy-Hughes',
  'description': 'Buy ten no billion rise difficult many onto occur.',
  'category': 'cooking',
  'url': 'https://murphy-hughes.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'image',
    'education',
    'search',
    'music'
  ]
},
  {
  'id': 'french-maldonado-and-smith',
  'name': 'French, Maldonado and Smith',
  'description': 'Through write office with often worker west gun church response drive.',
  'category': 'chat',
  'url': 'https://french,maldonadoandsmith.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'data',
    'image',
    'ai',
    'chatbot'
  ]
},
  {
  'id': 'lewis-medina',
  'name': 'Lewis-Medina',
  'description': 'Loss increase hold author poor table side fact show century someone.',
  'category': 'ideas',
  'url': 'https://lewis-medina.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'music',
    'automation',
    'workflow',
    'design'
  ]
},
  {
  'id': 'jackson-phillips-and-huber',
  'name': 'Jackson, Phillips and Huber',
  'description': 'Able style Democrat individual continue threat chair third scientist.',
  'category': 'data',
  'url': 'https://jackson,phillipsandhuber.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'recipe',
    'ai',
    'workflow',
    'search'
  ]
},
  {
  'id': 'martinez-plc',
  'name': 'Martinez PLC',
  'description': 'Fact nature conference down machine keep action.',
  'category': 'learning',
  'url': 'https://martinezplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'music',
    'search',
    'voice',
    'workflow'
  ]
},
  {
  'id': 'perez-inc',
  'name': 'Perez Inc',
  'description': 'Heart same world most southern head join specific body.',
  'category': 'writing',
  'url': 'https://perezinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'automation',
    'chatbot',
    'music',
    'video'
  ]
},
  {
  'id': 'vincent-ltd',
  'name': 'Vincent Ltd',
  'description': 'Decide that season yet memory could begin certainly.',
  'category': 'workflow',
  'url': 'https://vincentltd.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'education',
    'data',
    'productivity',
    'image'
  ]
},
  {
  'id': 'owens-hanna',
  'name': 'Owens-Hanna',
  'description': 'Form successful whatever put event lot conference.',
  'category': 'research',
  'url': 'https://owens-hanna.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'music',
    'chatbot',
    'education',
    'creative'
  ]
},
  {
  'id': 'floyd-group',
  'name': 'Floyd Group',
  'description': 'Agency real tell easy more provide beyond animal rock.',
  'category': 'data',
  'url': 'https://floydgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'voice',
    'education',
    'data',
    'workflow'
  ]
},
  {
  'id': 'lewis-inc',
  'name': 'Lewis Inc',
  'description': 'Receive away son section study change religious specific she feel.',
  'category': 'cooking',
  'url': 'https://lewisinc.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'workflow',
    'chatbot',
    'ai',
    'video'
  ]
},
  {
  'id': 'hall-bryant',
  'name': 'Hall-Bryant',
  'description': 'Season civil shake card president research north ask coach color.',
  'category': 'learning',
  'url': 'https://hall-bryant.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'chatbot',
    'creative',
    'voice',
    'image'
  ]
},
  {
  'id': 'williams-llc',
  'name': 'Williams LLC',
  'description': 'Reflect off outside visit investment century foreign claim.',
  'category': 'presentations',
  'url': 'https://williamsllc.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'education',
    'image',
    'voice',
    'design'
  ]
},
  {
  'id': 'owen-johnson',
  'name': 'Owen-Johnson',
  'description': 'Order exactly case administration draw rich.',
  'category': 'ideas',
  'url': 'https://owen-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'creative',
    'search',
    'recipe',
    'music'
  ]
},
  {
  'id': 'flores-bentley',
  'name': 'Flores-Bentley',
  'description': 'Wife young audience toward quality travel alone cultural expect party couple bank expert.',
  'category': 'presentations',
  'url': 'https://flores-bentley.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'education',
    'video',
    'search',
    'music'
  ]
},
  {
  'id': 'baker-guerrero-and-richardson',
  'name': 'Baker, Guerrero and Richardson',
  'description': 'Join every south drive win decide travel meeting than.',
  'category': 'cooking',
  'url': 'https://baker,guerreroandrichardson.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'education',
    'recipe',
    'music',
    'ai'
  ]
},
  {
  'id': 'moore-huang-and-gonzalez',
  'name': 'Moore, Huang and Gonzalez',
  'description': 'Crime cut view six try bank physical apply those.',
  'category': 'creativity',
  'url': 'https://moore,huangandgonzalez.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'video',
    'education',
    'data',
    'analysis'
  ]
},
  {
  'id': 'duffy-inc',
  'name': 'Duffy Inc',
  'description': 'Above control bed actually officer growth.',
  'category': 'ideas',
  'url': 'https://duffyinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'design',
    'creative',
    'automation',
    'search'
  ]
},
  {
  'id': 'cook-pierce',
  'name': 'Cook-Pierce',
  'description': 'Morning moment tell be page dream particular direction big child pass power.',
  'category': 'audio',
  'url': 'https://cook-pierce.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'workflow',
    'chatbot',
    'productivity',
    'music'
  ]
},
  {
  'id': 'henderson-campos',
  'name': 'Henderson-Campos',
  'description': 'Enter age learn rich knowledge population mean.',
  'category': 'coding',
  'url': 'https://henderson-campos.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'education',
    'search',
    'workflow',
    'voice'
  ]
},
  {
  'id': 'griffin-llc',
  'name': 'Griffin LLC',
  'description': 'Significant size world lay owner unit.',
  'category': 'customer',
  'url': 'https://griffinllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'design',
    'workflow',
    'education',
    'search'
  ]
},
  {
  'id': 'parker-and-sons',
  'name': 'Parker and Sons',
  'description': 'Speech let eat the during huge middle recently partner why.',
  'category': 'chat',
  'url': 'https://parkerandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'search',
    'analysis',
    'design',
    'creative'
  ]
},
  {
  'id': 'kirby-ltd',
  'name': 'Kirby Ltd',
  'description': 'Coach away too officer teach stuff executive enter between large leader.',
  'category': 'learning',
  'url': 'https://kirbyltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'workflow',
    'automation',
    'voice',
    'ai'
  ]
},
  {
  'id': 'smith-meyer',
  'name': 'Smith-Meyer',
  'description': 'Door member movement agree design them sometimes shoulder stock impact machine itself.',
  'category': 'design',
  'url': 'https://smith-meyer.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'chatbot',
    'education',
    'recipe',
    'ai'
  ]
},
  {
  'id': 'tyler-inc',
  'name': 'Tyler Inc',
  'description': 'Will leave away family art short business.',
  'category': 'cooking',
  'url': 'https://tylerinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'video',
    'image',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'moore-wilkerson',
  'name': 'Moore-Wilkerson',
  'description': 'Though skill look recently series law wall.',
  'category': 'writing',
  'url': 'https://moore-wilkerson.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'design',
    'video',
    'voice',
    'education'
  ]
},
  {
  'id': 'johnson-thompson',
  'name': 'Johnson-Thompson',
  'description': 'Teach central down as drop provide data company history rest him charge southern.',
  'category': 'customer',
  'url': 'https://johnson-thompson.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'creative',
    'analysis',
    'workflow',
    'video'
  ]
},
  {
  'id': 'brown-gomez-and-hoffman',
  'name': 'Brown, Gomez and Hoffman',
  'description': 'Miss service same poor inside eight form bring she big common the would.',
  'category': 'music',
  'url': 'https://brown,gomezandhoffman.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'workflow',
    'image',
    'voice',
    'video'
  ]
},
  {
  'id': 'johnson-pace',
  'name': 'Johnson-Pace',
  'description': 'More him state may be as how person across strong.',
  'category': 'social',
  'url': 'https://johnson-pace.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'education',
    'image',
    'search',
    'music'
  ]
},
  {
  'id': 'smith-and-sons',
  'name': 'Smith and Sons',
  'description': 'Bill budget little investment month own standard participant.',
  'category': 'search',
  'url': 'https://smithandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'analysis',
    'productivity',
    'recipe',
    'voice'
  ]
},
  {
  'id': 'lopez-johnson',
  'name': 'Lopez-Johnson',
  'description': 'After voice officer behavior age structure.',
  'category': 'data',
  'url': 'https://lopez-johnson.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'automation',
    'search',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'rose-monroe',
  'name': 'Rose-Monroe',
  'description': 'Difference huge quite drug call fish call your less candidate sell.',
  'category': 'video',
  'url': 'https://rose-monroe.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'education',
    'analysis',
    'chatbot',
    'workflow'
  ]
},
  {
  'id': 'mccormick-jennings-and-espinoza',
  'name': 'Mccormick, Jennings and Espinoza',
  'description': 'Student represent cold none young sound Mrs activity no record.',
  'category': 'social',
  'url': 'https://mccormick,jenningsandespinoza.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'ai',
    'automation',
    'search',
    'music'
  ]
},
  {
  'id': 'baker-alexander-and-ayers',
  'name': 'Baker, Alexander and Ayers',
  'description': 'Society bank set light economic feeling here member.',
  'category': 'automation',
  'url': 'https://baker,alexanderandayers.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'image',
    'analysis',
    'chatbot',
    'video'
  ]
},
  {
  'id': 'jones-ball-and-santiago',
  'name': 'Jones, Ball and Santiago',
  'description': 'Radio talk job director actually west he decide although reach Congress something production.',
  'category': 'web',
  'url': 'https://jones,ballandsantiago.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'recipe',
    'workflow',
    'design',
    'automation'
  ]
},
  {
  'id': 'clark-lam',
  'name': 'Clark-Lam',
  'description': 'Opportunity wear guy else public treatment development information.',
  'category': 'presentations',
  'url': 'https://clark-lam.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'voice',
    'recipe',
    'music',
    'productivity'
  ]
},
  {
  'id': 'schroeder-plc',
  'name': 'Schroeder PLC',
  'description': 'Security lot per either personal various star sea population suffer entire cup bar.',
  'category': 'workflow',
  'url': 'https://schroederplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'recipe',
    'data',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'klein-brooks-and-gill',
  'name': 'Klein, Brooks and Gill',
  'description': 'Nearly protect sound use four rule field themselves certainly.',
  'category': 'customer',
  'url': 'https://klein,brooksandgill.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'data',
    'automation',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'reynolds-and-sons',
  'name': 'Reynolds and Sons',
  'description': 'Chance agent economy major hold space source myself well situation board hit stuff job.',
  'category': 'coding',
  'url': 'https://reynoldsandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'education',
    'productivity',
    'video',
    'search'
  ]
},
  {
  'id': 'lopez-mathis-and-adams',
  'name': 'Lopez, Mathis and Adams',
  'description': 'Vote dream land cost draw choose every heart answer.',
  'category': 'customer',
  'url': 'https://lopez,mathisandadams.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'design',
    'chatbot',
    'recipe',
    'image'
  ]
},
  {
  'id': 'summers-warner',
  'name': 'Summers-Warner',
  'description': 'Traditional direction have open chance most bed money building role item.',
  'category': 'chat',
  'url': 'https://summers-warner.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'music',
    'data',
    'design',
    'image'
  ]
},
  {
  'id': 'carrillo-williams-and-simpson',
  'name': 'Carrillo, Williams and Simpson',
  'description': 'Play prove table amount weight item history.',
  'category': 'coding',
  'url': 'https://carrillo,williamsandsimpson.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'music',
    'ai',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'gill-hill-and-edwards',
  'name': 'Gill, Hill and Edwards',
  'description': 'Win shake audience look raise important western week.',
  'category': 'search',
  'url': 'https://gill,hillandedwards.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'workflow',
    'recipe',
    'analysis',
    'image'
  ]
},
  {
  'id': 'hayes-david-and-cobb',
  'name': 'Hayes, David and Cobb',
  'description': 'Turn girl morning program Mrs drug first son officer sing forget.',
  'category': 'data',
  'url': 'https://hayes,davidandcobb.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'data',
    'recipe',
    'music',
    'image'
  ]
},
  {
  'id': 'vazquez-brown-and-arias',
  'name': 'Vazquez, Brown and Arias',
  'description': 'Evening where majority girl early recently.',
  'category': 'automation',
  'url': 'https://vazquez,brownandarias.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'creative',
    'automation',
    'education',
    'chatbot'
  ]
},
  {
  'id': 'aguilar-knight-and-pineda',
  'name': 'Aguilar, Knight and Pineda',
  'description': 'Near company bill realize across no apply know say pay fight feeling.',
  'category': 'automation',
  'url': 'https://aguilar,knightandpineda.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'workflow',
    'music',
    'image',
    'data'
  ]
},
  {
  'id': 'chapman-fritz-and-hopkins',
  'name': 'Chapman, Fritz and Hopkins',
  'description': 'Full us indicate adult peace eye baby picture ready part federal understand role.',
  'category': 'chat',
  'url': 'https://chapman,fritzandhopkins.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'analysis',
    'education',
    'automation',
    'search'
  ]
},
  {
  'id': 'jensen-mitchell-and-aguirre',
  'name': 'Jensen, Mitchell and Aguirre',
  'description': 'Within friend tree seem ever start owner data way.',
  'category': 'web',
  'url': 'https://jensen,mitchellandaguirre.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'video',
    'ai',
    'voice',
    'analysis'
  ]
},
  {
  'id': 'arellano-group',
  'name': 'Arellano Group',
  'description': 'Edge authority woman water south prepare thank any.',
  'category': 'writing',
  'url': 'https://arellanogroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'voice',
    'design',
    'data',
    'ai'
  ]
},
  {
  'id': 'neal-simmons',
  'name': 'Neal-Simmons',
  'description': 'Friend material few wait have lot thing little resource admit yourself after.',
  'category': 'writing',
  'url': 'https://neal-simmons.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'workflow',
    'music',
    'data',
    'chatbot'
  ]
},
  {
  'id': 'watson-llc',
  'name': 'Watson LLC',
  'description': 'Improve since director model short force.',
  'category': 'creativity',
  'url': 'https://watsonllc.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'voice',
    'recipe',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'lyons-inc',
  'name': 'Lyons Inc',
  'description': 'Memory toward away either once could arrive service.',
  'category': 'cooking',
  'url': 'https://lyonsinc.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'search',
    'automation',
    'data',
    'video'
  ]
},
  {
  'id': 'johnson-group',
  'name': 'Johnson Group',
  'description': 'Either anyone establish level standard glass control agreement.',
  'category': 'social',
  'url': 'https://johnsongroup.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'creative',
    'voice',
    'ai',
    'image'
  ]
},
  {
  'id': 'ramirez-johnson',
  'name': 'Ramirez-Johnson',
  'description': 'Couple natural quite top risk election hit inside war meeting reality company size.',
  'category': 'ideas',
  'url': 'https://ramirez-johnson.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'design',
    'ai',
    'productivity',
    'image'
  ]
},
  {
  'id': 'hudson-llc',
  'name': 'Hudson LLC',
  'description': 'Group room expert yeah entire per high feeling single.',
  'category': 'coding',
  'url': 'https://hudsonllc.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'ai',
    'video',
    'workflow',
    'music'
  ]
},
  {
  'id': 'harris-ltd',
  'name': 'Harris Ltd',
  'description': 'Human official same success thousand information thus sister huge something.',
  'category': 'video',
  'url': 'https://harrisltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'automation',
    'workflow',
    'design',
    'education'
  ]
},
  {
  'id': 'spencer-group',
  'name': 'Spencer Group',
  'description': 'Professor amount carry ready remain him eat she body name.',
  'category': 'presentations',
  'url': 'https://spencergroup.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'chatbot',
    'automation',
    'music',
    'voice'
  ]
},
  {
  'id': 'johnson-mejia',
  'name': 'Johnson-Mejia',
  'description': 'Carry network meet number north inside western catch general gun.',
  'category': 'chat',
  'url': 'https://johnson-mejia.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'creative',
    'design',
    'music',
    'workflow'
  ]
},
  {
  'id': 'hughes-and-sons',
  'name': 'Hughes and Sons',
  'description': 'Record successful remember feeling fine suffer detail both my daughter.',
  'category': 'ideas',
  'url': 'https://hughesandsons.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'education',
    'image',
    'design',
    'automation'
  ]
},
  {
  'id': 'walsh-curry-and-carlson',
  'name': 'Walsh, Curry and Carlson',
  'description': 'Even piece report worry clear project stock his.',
  'category': 'chat',
  'url': 'https://walsh,curryandcarlson.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'analysis',
    'search',
    'workflow',
    'chatbot'
  ]
},
  {
  'id': 'myers-plc',
  'name': 'Myers PLC',
  'description': 'Everybody special before experience deal ground put physical world modern.',
  'category': 'presentations',
  'url': 'https://myersplc.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'design',
    'workflow',
    'productivity',
    'education'
  ]
},
  {
  'id': 'hall-torres-and-perez',
  'name': 'Hall, Torres and Perez',
  'description': 'Mean effect employee political government reveal.',
  'category': 'customer',
  'url': 'https://hall,torresandperez.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'analysis',
    'image',
    'data',
    'recipe'
  ]
},
  {
  'id': 'conway-group',
  'name': 'Conway Group',
  'description': 'Above cultural voice wind administration paper buy trial federal less any hotel.',
  'category': 'image',
  'url': 'https://conwaygroup.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'video',
    'analysis',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'thomas-llc',
  'name': 'Thomas LLC',
  'description': 'Least machine international fast her west field pay.',
  'category': 'search',
  'url': 'https://thomasllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'workflow',
    'video',
    'design',
    'image'
  ]
},
  {
  'id': 'pittman-horne-and-dickson',
  'name': 'Pittman, Horne and Dickson',
  'description': 'Yet western company something court realize less cold two very loss like.',
  'category': 'customer',
  'url': 'https://pittman,horneanddickson.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'chatbot',
    'voice',
    'ai',
    'image'
  ]
},
  {
  'id': 'little-ryan',
  'name': 'Little-Ryan',
  'description': 'Listen nothing manage do kid positive cultural security easy carry bad somebody detail.',
  'category': 'search',
  'url': 'https://little-ryan.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'music',
    'productivity',
    'recipe',
    'search'
  ]
},
  {
  'id': 'perez-weaver-and-glenn',
  'name': 'Perez, Weaver and Glenn',
  'description': 'Space conference foot whole letter statement.',
  'category': 'music',
  'url': 'https://perez,weaverandglenn.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'image',
    'ai',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'robinson-phillips-and-harmon',
  'name': 'Robinson, Phillips and Harmon',
  'description': 'Person represent magazine crime across rich notice available important find board.',
  'category': 'video',
  'url': 'https://robinson,phillipsandharmon.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'analysis',
    'data',
    'ai',
    'video'
  ]
},
  {
  'id': 'trujillo-floyd',
  'name': 'Trujillo-Floyd',
  'description': 'Full successful response skill paper author likely stock design represent approach.',
  'category': 'video',
  'url': 'https://trujillo-floyd.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'workflow',
    'ai',
    'music',
    'design'
  ]
},
  {
  'id': 'roberson-howell',
  'name': 'Roberson-Howell',
  'description': 'Why eat leave stage develop eight right own thought north watch fear arrive.',
  'category': 'social',
  'url': 'https://roberson-howell.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'design',
    'video',
    'ai',
    'recipe'
  ]
},
  {
  'id': 'francis-inc',
  'name': 'Francis Inc',
  'description': 'Firm his night open improve phone sometimes pretty.',
  'category': 'music',
  'url': 'https://francisinc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'chatbot',
    'music',
    'design',
    'data'
  ]
},
  {
  'id': 'bond-walton',
  'name': 'Bond-Walton',
  'description': 'Shake maintain growth deep different unit their hair himself simply.',
  'category': 'presentations',
  'url': 'https://bond-walton.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'chatbot',
    'ai',
    'music',
    'creative'
  ]
},
  {
  'id': 'miller-llc',
  'name': 'Miller LLC',
  'description': 'See treat kind clearly enter account the vote industry according color.',
  'category': 'research',
  'url': 'https://millerllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'workflow',
    'recipe',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'davis-moore-and-schneider',
  'name': 'Davis, Moore and Schneider',
  'description': 'Successful consumer born five way fine cause answer.',
  'category': 'data',
  'url': 'https://davis,mooreandschneider.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'productivity',
    'ai',
    'search',
    'creative'
  ]
},
  {
  'id': 'hicks-james',
  'name': 'Hicks-James',
  'description': 'Yard above couple particularly before level.',
  'category': 'music',
  'url': 'https://hicks-james.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'data',
    'education',
    'automation',
    'image'
  ]
},
  {
  'id': 'griffin-group',
  'name': 'Griffin Group',
  'description': 'Several early your oil sign force here put.',
  'category': 'research',
  'url': 'https://griffingroup.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'productivity',
    'video',
    'recipe',
    'voice'
  ]
},
  {
  'id': 'davis-lin-and-buckley',
  'name': 'Davis, Lin and Buckley',
  'description': 'Education hour big affect thus hair.',
  'category': 'ideas',
  'url': 'https://davis,linandbuckley.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'automation',
    'search',
    'productivity',
    'music'
  ]
},
  {
  'id': 'perry-and-sons',
  'name': 'Perry and Sons',
  'description': 'South beat very middle somebody both would need no.',
  'category': 'cooking',
  'url': 'https://perryandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'analysis',
    'ai',
    'design',
    'music'
  ]
},
  {
  'id': 'lee-ltd',
  'name': 'Lee Ltd',
  'description': 'Not us good he policy kid hand anyone network action.',
  'category': 'social',
  'url': 'https://leeltd.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'design',
    'chatbot',
    'video',
    'education'
  ]
},
  {
  'id': 'lawrence-bolton-and-leon',
  'name': 'Lawrence, Bolton and Leon',
  'description': 'In above party hold discussion response establish someone customer executive sort through.',
  'category': 'research',
  'url': 'https://lawrence,boltonandleon.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'ai',
    'analysis',
    'workflow',
    'recipe'
  ]
},
  {
  'id': 'serrano-mcgee-and-thompson',
  'name': 'Serrano, Mcgee and Thompson',
  'description': 'Defense national summer big forget help talk but section low.',
  'category': 'web',
  'url': 'https://serrano,mcgeeandthompson.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'data',
    'automation',
    'workflow',
    'voice'
  ]
},
  {
  'id': 'collins-inc',
  'name': 'Collins Inc',
  'description': 'So design enter station power up everyone have picture now act safe.',
  'category': 'data',
  'url': 'https://collinsinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'video',
    'automation',
    'workflow',
    'chatbot'
  ]
},
  {
  'id': 'cruz-king',
  'name': 'Cruz-King',
  'description': 'Firm woman both mission always Republican mother.',
  'category': 'productivity',
  'url': 'https://cruz-king.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'creative',
    'data',
    'analysis',
    'image'
  ]
},
  {
  'id': 'keller-smith',
  'name': 'Keller-Smith',
  'description': 'Go other red item prove certainly.',
  'category': 'search',
  'url': 'https://keller-smith.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'analysis',
    'data',
    'automation',
    'design'
  ]
},
  {
  'id': 'lee-daniels',
  'name': 'Lee-Daniels',
  'description': 'Experience specific throw bill try challenge way order piece executive rule body instead.',
  'category': 'data',
  'url': 'https://lee-daniels.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'search',
    'design',
    'workflow',
    'productivity'
  ]
},
  {
  'id': 'benjamin-plc',
  'name': 'Benjamin PLC',
  'description': 'Wrong talk administration around listen politics.',
  'category': 'cooking',
  'url': 'https://benjaminplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'recipe',
    'search',
    'video',
    'workflow'
  ]
},
  {
  'id': 'cook-petersen-and-johnson',
  'name': 'Cook, Petersen and Johnson',
  'description': 'Defense growth sign world authority even public.',
  'category': 'research',
  'url': 'https://cook,petersenandjohnson.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'automation',
    'recipe',
    'design'
  ]
},
  {
  'id': 'rice-inc',
  'name': 'Rice Inc',
  'description': 'Traditional sing fill share base event level born practice trip fire accept.',
  'category': 'chat',
  'url': 'https://riceinc.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'design',
    'analysis',
    'image',
    'ai'
  ]
},
  {
  'id': 'cruz-llc',
  'name': 'Cruz LLC',
  'description': 'Back expert avoid method catch since keep.',
  'category': 'design',
  'url': 'https://cruzllc.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'automation',
    'recipe',
    'education',
    'data'
  ]
},
  {
  'id': 'kelly-llc',
  'name': 'Kelly LLC',
  'description': 'Guess same national reach conference drop pressure writer between.',
  'category': 'image',
  'url': 'https://kellyllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'productivity',
    'design',
    'workflow',
    'search'
  ]
},
  {
  'id': 'patrick-manning-and-carson',
  'name': 'Patrick, Manning and Carson',
  'description': 'Dark because hot modern much study carry.',
  'category': 'presentations',
  'url': 'https://patrick,manningandcarson.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'recipe',
    'voice',
    'automation',
    'chatbot'
  ]
},
  {
  'id': 'young-group',
  'name': 'Young Group',
  'description': 'Often attention over full pay newspaper treat think billion sure support phone with.',
  'category': 'chat',
  'url': 'https://younggroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'creative',
    'ai',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'rodriguez-thompson',
  'name': 'Rodriguez-Thompson',
  'description': 'Increase ability economy here gas represent else newspaper owner.',
  'category': 'creativity',
  'url': 'https://rodriguez-thompson.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'data',
    'analysis',
    'search',
    'creative'
  ]
},
  {
  'id': 'hansen-ltd',
  'name': 'Hansen Ltd',
  'description': 'Him try suffer final national week change among tough source.',
  'category': 'presentations',
  'url': 'https://hansenltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'workflow',
    'productivity',
    'video',
    'data'
  ]
},
  {
  'id': 'wiggins-garcia',
  'name': 'Wiggins-Garcia',
  'description': 'Check argue month attention nation organization lose race act whose.',
  'category': 'design',
  'url': 'https://wiggins-garcia.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'creative',
    'design',
    'automation',
    'education'
  ]
},
  {
  'id': 'johnson-kim',
  'name': 'Johnson-Kim',
  'description': 'Forward southern week beautiful practice mind generation brother four southern red suddenly why.',
  'category': 'writing',
  'url': 'https://johnson-kim.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'chatbot',
    'recipe',
    'video',
    'creative'
  ]
},
  {
  'id': 'phillips-ltd',
  'name': 'Phillips Ltd',
  'description': 'Theory alone simple me woman himself threat.',
  'category': 'cooking',
  'url': 'https://phillipsltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'voice',
    'design',
    'ai',
    'video'
  ]
},
  {
  'id': 'meyer-ltd',
  'name': 'Meyer Ltd',
  'description': 'Wife decide statement certain series game role.',
  'category': 'research',
  'url': 'https://meyerltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'creative',
    'ai',
    'music',
    'video'
  ]
},
  {
  'id': 'brown-gross-and-galloway',
  'name': 'Brown, Gross and Galloway',
  'description': 'Between dog all east west information end always rest wall.',
  'category': 'music',
  'url': 'https://brown,grossandgalloway.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'image',
    'analysis',
    'search',
    'voice'
  ]
},
  {
  'id': 'booth-sanders',
  'name': 'Booth-Sanders',
  'description': 'Than game offer most heavy clear manager talk should.',
  'category': 'coding',
  'url': 'https://booth-sanders.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'image',
    'productivity',
    'automation',
    'workflow'
  ]
},
  {
  'id': 'cooper-mcneil',
  'name': 'Cooper-Mcneil',
  'description': 'Travel bed begin cup goal about wall.',
  'category': 'customer',
  'url': 'https://cooper-mcneil.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'image',
    'recipe',
    'data',
    'workflow'
  ]
},
  {
  'id': 'stewart-and-sons',
  'name': 'Stewart and Sons',
  'description': 'Hair summer partner TV safe heart opportunity at throughout Mr.',
  'category': 'writing',
  'url': 'https://stewartandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'music',
    'analysis',
    'data',
    'design'
  ]
},
  {
  'id': 'norman-johnson-and-dixon',
  'name': 'Norman, Johnson and Dixon',
  'description': 'Give third leave apply fall father either foot consider.',
  'category': 'customer',
  'url': 'https://norman,johnsonanddixon.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'search',
    'automation',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'johnson-taylor-and-johnston',
  'name': 'Johnson, Taylor and Johnston',
  'description': 'Chair to talk from foot condition federal sometimes.',
  'category': 'web',
  'url': 'https://johnson,taylorandjohnston.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'workflow',
    'recipe',
    'automation',
    'chatbot'
  ]
},
  {
  'id': 'campbell-jones-and-moses',
  'name': 'Campbell, Jones and Moses',
  'description': 'Yet choice TV new region force.',
  'category': 'ideas',
  'url': 'https://campbell,jonesandmoses.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'chatbot',
    'image',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'huynh-mason',
  'name': 'Huynh-Mason',
  'description': 'Last late beautiful space act evening share well.',
  'category': 'presentations',
  'url': 'https://huynh-mason.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'data',
    'video',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'thompson-group',
  'name': 'Thompson Group',
  'description': 'Easy west rest reach task expert authority other house significant choice computer deal economic.',
  'category': 'automation',
  'url': 'https://thompsongroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'music',
    'creative',
    'data',
    'chatbot'
  ]
},
  {
  'id': 'robertson-ltd',
  'name': 'Robertson Ltd',
  'description': 'I heart believe training make high role something relationship.',
  'category': 'coding',
  'url': 'https://robertsonltd.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'design',
    'automation',
    'creative',
    'chatbot'
  ]
},
  {
  'id': 'fuller-llc',
  'name': 'Fuller LLC',
  'description': 'Save station pass total appear administration before structure which along.',
  'category': 'chat',
  'url': 'https://fullerllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'chatbot',
    'music',
    'productivity',
    'automation'
  ]
},
  {
  'id': 'sanders-group',
  'name': 'Sanders Group',
  'description': 'Perhaps fine choose fall movement organization fast.',
  'category': 'ideas',
  'url': 'https://sandersgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'video',
    'chatbot',
    'recipe',
    'automation'
  ]
},
  {
  'id': 'parsons-peterson-and-barajas',
  'name': 'Parsons, Peterson and Barajas',
  'description': 'First kid computer fast include measure area mind become arm suffer must.',
  'category': 'music',
  'url': 'https://parsons,petersonandbarajas.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'search',
    'ai',
    'data',
    'education'
  ]
},
  {
  'id': 'oliver-simmons-and-vaughn',
  'name': 'Oliver, Simmons and Vaughn',
  'description': 'Effort son indicate say reality doctor listen animal technology change wife.',
  'category': 'writing',
  'url': 'https://oliver,simmonsandvaughn.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'image',
    'recipe',
    'video',
    'workflow'
  ]
},
  {
  'id': 'hartman-chavez-and-patterson',
  'name': 'Hartman, Chavez and Patterson',
  'description': 'Knowledge manage speech history chance market share important station show.',
  'category': 'cooking',
  'url': 'https://hartman,chavezandpatterson.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'image',
    'data',
    'music',
    'workflow'
  ]
},
  {
  'id': 'martin-clark-and-reese',
  'name': 'Martin, Clark and Reese',
  'description': 'Friend firm involve rich well kitchen eat environmental develop wrong big.',
  'category': 'creativity',
  'url': 'https://martin,clarkandreese.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'music',
    'voice',
    'automation',
    'creative'
  ]
},
  {
  'id': 'henry-llc',
  'name': 'Henry LLC',
  'description': 'Simple safe choice father short both attention hour all general few.',
  'category': 'music',
  'url': 'https://henryllc.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'automation',
    'workflow',
    'video',
    'design'
  ]
},
  {
  'id': 'pena-allison-and-davis',
  'name': 'Pena, Allison and Davis',
  'description': 'Improve arrive court rule term street guess imagine peace beyond.',
  'category': 'research',
  'url': 'https://pena,allisonanddavis.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'chatbot',
    'analysis',
    'recipe',
    'education'
  ]
},
  {
  'id': 'cook-inc',
  'name': 'Cook Inc',
  'description': 'Cultural reality race girl baby around war cost imagine song.',
  'category': 'social',
  'url': 'https://cookinc.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'video',
    'education',
    'analysis',
    'data'
  ]
},
  {
  'id': 'adams-ltd',
  'name': 'Adams Ltd',
  'description': 'Job design plant guess avoid idea leave one together draw clear series hair.',
  'category': 'automation',
  'url': 'https://adamsltd.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'data',
    'workflow',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'anthony-ltd',
  'name': 'Anthony Ltd',
  'description': 'Medical try safe even range hear miss too everybody.',
  'category': 'web',
  'url': 'https://anthonyltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'education',
    'video',
    'design',
    'voice'
  ]
},
  {
  'id': 'dougherty-deleon-and-day',
  'name': 'Dougherty, Deleon and Day',
  'description': 'This cold ok civil quickly ability table forget green Congress spring station discussion.',
  'category': 'web',
  'url': 'https://dougherty,deleonandday.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'image',
    'workflow',
    'automation',
    'productivity'
  ]
},
  {
  'id': 'wolfe-nelson',
  'name': 'Wolfe-Nelson',
  'description': 'Song father picture some laugh green particularly real energy able.',
  'category': 'chat',
  'url': 'https://wolfe-nelson.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'chatbot',
    'search',
    'video',
    'analysis'
  ]
},
  {
  'id': 'perry-inc',
  'name': 'Perry Inc',
  'description': 'Front somebody collection direction point action Mrs.',
  'category': 'audio',
  'url': 'https://perryinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'music',
    'voice',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'boyd-jones',
  'name': 'Boyd-Jones',
  'description': 'Bank kind kitchen of career than nation avoid teach financial development.',
  'category': 'audio',
  'url': 'https://boyd-jones.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'automation',
    'education',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'gonzalez-kidd-and-knight',
  'name': 'Gonzalez, Kidd and Knight',
  'description': 'Condition scene measure put few plant.',
  'category': 'writing',
  'url': 'https://gonzalez,kiddandknight.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'voice',
    'workflow',
    'automation',
    'music'
  ]
},
  {
  'id': 'joseph-reyes-and-levine',
  'name': 'Joseph, Reyes and Levine',
  'description': 'Up hundred fund old page popular research student draw chair minute accept there.',
  'category': 'audio',
  'url': 'https://joseph,reyesandlevine.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'automation',
    'education',
    'creative',
    'music'
  ]
},
  {
  'id': 'guzman-jones',
  'name': 'Guzman-Jones',
  'description': 'College type take enter space detail bed.',
  'category': 'productivity',
  'url': 'https://guzman-jones.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'analysis',
    'search',
    'video',
    'automation'
  ]
},
  {
  'id': 'martinez-obrien',
  'name': 'Martinez-Obrien',
  'description': 'Blood media method bank different or true drop agree actually sense data capital.',
  'category': 'research',
  'url': 'https://martinez-obrien.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'music',
    'automation',
    'video',
    'design'
  ]
},
  {
  'id': 'young-cardenas-and-sullivan',
  'name': 'Young, Cardenas and Sullivan',
  'description': 'Sport investment impact the discussion over save skill war image.',
  'category': 'cooking',
  'url': 'https://young,cardenasandsullivan.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'workflow',
    'image',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'castro-mitchell-and-taylor',
  'name': 'Castro, Mitchell and Taylor',
  'description': 'Early occur office that yard power read most.',
  'category': 'coding',
  'url': 'https://castro,mitchellandtaylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'creative',
    'design',
    'education',
    'automation'
  ]
},
  {
  'id': 'walls-llc',
  'name': 'Walls LLC',
  'description': 'Thousand join development interest thousand two better nation Mrs born.',
  'category': 'design',
  'url': 'https://wallsllc.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'creative',
    'recipe',
    'music',
    'voice'
  ]
},
  {
  'id': 'steele-jimenez',
  'name': 'Steele-Jimenez',
  'description': 'Travel tend law simple doctor sound national put husband.',
  'category': 'presentations',
  'url': 'https://steele-jimenez.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'productivity',
    'ai',
    'data',
    'chatbot'
  ]
},
  {
  'id': 'alvarez-inc',
  'name': 'Alvarez Inc',
  'description': 'Leg employee door usually story market popular arrive increase reality its.',
  'category': 'image',
  'url': 'https://alvarezinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'search',
    'creative',
    'data',
    'voice'
  ]
},
  {
  'id': 'carter-olsen-and-schroeder',
  'name': 'Carter, Olsen and Schroeder',
  'description': 'Down issue community during ball them room analysis wall key fund under concern.',
  'category': 'chat',
  'url': 'https://carter,olsenandschroeder.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'image',
    'data',
    'music',
    'search'
  ]
},
  {
  'id': 'wiley-adams-and-cole',
  'name': 'Wiley, Adams and Cole',
  'description': 'Most yard individual over suffer allow able high leave hold want ability memory.',
  'category': 'workflow',
  'url': 'https://wiley,adamsandcole.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'ai',
    'creative',
    'recipe',
    'video'
  ]
},
  {
  'id': 'church-owens-and-silva',
  'name': 'Church, Owens and Silva',
  'description': 'Someone few must to whom face physical one.',
  'category': 'image',
  'url': 'https://church,owensandsilva.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'productivity',
    'analysis',
    'image',
    'creative'
  ]
},
  {
  'id': 'thompson-ltd',
  'name': 'Thompson Ltd',
  'description': 'Out six possible spend so or nation describe sport never.',
  'category': 'presentations',
  'url': 'https://thompsonltd.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'recipe',
    'education',
    'analysis',
    'image'
  ]
},
  {
  'id': 'miller-smith-and-graham',
  'name': 'Miller, Smith and Graham',
  'description': 'Identify put matter south accept right on leave ball executive himself success condition.',
  'category': 'presentations',
  'url': 'https://miller,smithandgraham.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'image',
    'data',
    'automation',
    'creative'
  ]
},
  {
  'id': 'jones-group',
  'name': 'Jones Group',
  'description': 'Including great relate billion along suggest style.',
  'category': 'social',
  'url': 'https://jonesgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'creative',
    'voice',
    'productivity',
    'education'
  ]
},
  {
  'id': 'lewis-group',
  'name': 'Lewis Group',
  'description': 'Popular maybe lot where professional my rich get man.',
  'category': 'customer',
  'url': 'https://lewisgroup.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'automation',
    'design',
    'search',
    'music'
  ]
},
  {
  'id': 'rhodes-llc',
  'name': 'Rhodes LLC',
  'description': 'Range character policy much company north.',
  'category': 'chat',
  'url': 'https://rhodesllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'education',
    'recipe',
    'analysis',
    'chatbot'
  ]
},
  {
  'id': 'nguyen-plc',
  'name': 'Nguyen PLC',
  'description': 'We structure hair drop option story happy.',
  'category': 'music',
  'url': 'https://nguyenplc.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'search',
    'video',
    'workflow',
    'music'
  ]
},
  {
  'id': 'patton-rose-and-brandt',
  'name': 'Patton, Rose and Brandt',
  'description': 'Investment try product reason try during huge significant experience despite set.',
  'category': 'search',
  'url': 'https://patton,roseandbrandt.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'design',
    'voice',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'flowers-garcia',
  'name': 'Flowers-Garcia',
  'description': 'Early according much wait last skin role attention.',
  'category': 'customer',
  'url': 'https://flowers-garcia.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'video',
    'chatbot',
    'search',
    'data'
  ]
},
  {
  'id': 'herrera-munoz-and-harris',
  'name': 'Herrera, Munoz and Harris',
  'description': 'Remain without six discussion cultural mouth interesting perform poor shoulder.',
  'category': 'coding',
  'url': 'https://herrera,munozandharris.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'image',
    'music',
    'analysis',
    'video'
  ]
},
  {
  'id': 'miller-mccann',
  'name': 'Miller-Mccann',
  'description': 'Owner guy stock despite guess ever art level require.',
  'category': 'productivity',
  'url': 'https://miller-mccann.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'video',
    'automation',
    'creative',
    'ai'
  ]
},
  {
  'id': 'diaz-gill-and-white',
  'name': 'Diaz, Gill and White',
  'description': 'Those peace hair political piece news trouble thing.',
  'category': 'customer',
  'url': 'https://diaz,gillandwhite.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'image',
    'music',
    'creative',
    'chatbot'
  ]
},
  {
  'id': 'taylor-george-and-harrison',
  'name': 'Taylor, George and Harrison',
  'description': 'Democratic back opportunity similar choice especially drug police.',
  'category': 'music',
  'url': 'https://taylor,georgeandharrison.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'creative',
    'analysis',
    'image',
    'search'
  ]
},
  {
  'id': 'gordon-thompson-and-harris',
  'name': 'Gordon, Thompson and Harris',
  'description': 'Management bad various step attention skill particularly size catch positive interview.',
  'category': 'cooking',
  'url': 'https://gordon,thompsonandharris.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'productivity',
    'chatbot',
    'ai',
    'creative'
  ]
},
  {
  'id': 'hamilton-woodward',
  'name': 'Hamilton-Woodward',
  'description': 'Detail tree live challenge program return.',
  'category': 'workflow',
  'url': 'https://hamilton-woodward.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'education',
    'creative',
    'video',
    'workflow'
  ]
},
  {
  'id': 'banks-williams',
  'name': 'Banks-Williams',
  'description': 'Politics assume perform factor another term bank lead direction capital main morning.',
  'category': 'cooking',
  'url': 'https://banks-williams.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'chatbot',
    'creative',
    'productivity',
    'image'
  ]
},
  {
  'id': 'garcia-frey-and-morris',
  'name': 'Garcia, Frey and Morris',
  'description': 'Former part treatment remain painting policy current history recently foreign fire his possible.',
  'category': 'presentations',
  'url': 'https://garcia,freyandmorris.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'chatbot',
    'design',
    'voice',
    'search'
  ]
},
  {
  'id': 'norris-black-and-golden',
  'name': 'Norris, Black and Golden',
  'description': 'Drop traditional unit language hard lawyer look claim Congress.',
  'category': 'cooking',
  'url': 'https://norris,blackandgolden.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'search',
    'video',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'nguyen-thomas',
  'name': 'Nguyen-Thomas',
  'description': 'Front include pull old body task attack yourself agree nor our.',
  'category': 'social',
  'url': 'https://nguyen-thomas.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'creative',
    'design',
    'music',
    'ai'
  ]
},
  {
  'id': 'jones-johnson',
  'name': 'Jones-Johnson',
  'description': 'Himself game weight yard general action baby look reflect.',
  'category': 'ideas',
  'url': 'https://jones-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'video',
    'chatbot',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'parker-wilson',
  'name': 'Parker-Wilson',
  'description': 'Present loss here prevent share wall activity skin middle three himself.',
  'category': 'presentations',
  'url': 'https://parker-wilson.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'analysis',
    'recipe',
    'ai',
    'education'
  ]
},
  {
  'id': 'miller-gutierrez-and-patel',
  'name': 'Miller, Gutierrez and Patel',
  'description': 'Remember finally major exist concern road turn market under sign.',
  'category': 'video',
  'url': 'https://miller,gutierrezandpatel.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'voice',
    'workflow',
    'image',
    'education'
  ]
},
  {
  'id': 'pittman-norton',
  'name': 'Pittman-Norton',
  'description': 'Probably only water Mr red edge plan other statement by president turn stage.',
  'category': 'presentations',
  'url': 'https://pittman-norton.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'search',
    'design',
    'productivity',
    'image'
  ]
},
  {
  'id': 'hunter-and-sons',
  'name': 'Hunter and Sons',
  'description': 'Admit age upon most religious successful seven.',
  'category': 'research',
  'url': 'https://hunterandsons.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'ai',
    'video',
    'education',
    'chatbot'
  ]
},
  {
  'id': 'khan-ltd',
  'name': 'Khan Ltd',
  'description': 'Return service and financial within need.',
  'category': 'search',
  'url': 'https://khanltd.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'video',
    'recipe',
    'data',
    'design'
  ]
},
  {
  'id': 'torres-and-sons',
  'name': 'Torres and Sons',
  'description': 'Benefit find we individual evidence eat hour pretty and pass agree quickly key.',
  'category': 'cooking',
  'url': 'https://torresandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'recipe',
    'productivity',
    'voice',
    'education'
  ]
},
  {
  'id': 'edwards-and-sons',
  'name': 'Edwards and Sons',
  'description': 'Herself Republican stock direction consider hit direction loss agreement almost military miss.',
  'category': 'audio',
  'url': 'https://edwardsandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'video',
    'workflow',
    'education',
    'data'
  ]
},
  {
  'id': 'johnson-serrano',
  'name': 'Johnson-Serrano',
  'description': 'Page soldier statement write agent hard identify control small bank thought.',
  'category': 'social',
  'url': 'https://johnson-serrano.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'voice',
    'image',
    'education',
    'design'
  ]
},
  {
  'id': 'davila-holland',
  'name': 'Davila-Holland',
  'description': 'Front bill wait foreign whom class four protect nearly interesting show.',
  'category': 'coding',
  'url': 'https://davila-holland.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'search',
    'video',
    'design',
    'productivity'
  ]
},
  {
  'id': 'scott-johnson-and-griffin',
  'name': 'Scott, Johnson and Griffin',
  'description': 'Tell trial decision night record something four.',
  'category': 'music',
  'url': 'https://scott,johnsonandgriffin.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'data',
    'productivity',
    'chatbot',
    'recipe'
  ]
},
  {
  'id': 'williams-guzman-and-molina',
  'name': 'Williams, Guzman and Molina',
  'description': 'Church office eye beyond side some director today.',
  'category': 'creativity',
  'url': 'https://williams,guzmanandmolina.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'image',
    'analysis',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'sanchez-ltd',
  'name': 'Sanchez Ltd',
  'description': 'Within perhaps across mouth own war note generation sister purpose themselves.',
  'category': 'image',
  'url': 'https://sanchezltd.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'search',
    'automation',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'lindsey-murphy-and-calderon',
  'name': 'Lindsey, Murphy and Calderon',
  'description': 'Fight than account represent different management hold offer executive left wide above.',
  'category': 'video',
  'url': 'https://lindsey,murphyandcalderon.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'workflow',
    'creative',
    'video',
    'education'
  ]
},
  {
  'id': 'rodriguez-llc',
  'name': 'Rodriguez LLC',
  'description': 'One modern natural look behind while sometimes resource service personal have air expect.',
  'category': 'ideas',
  'url': 'https://rodriguezllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'search',
    'automation',
    'creative',
    'analysis'
  ]
},
  {
  'id': 'monroe-inc',
  'name': 'Monroe Inc',
  'description': 'Support behind PM Democrat tree well huge act.',
  'category': 'web',
  'url': 'https://monroeinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'data',
    'voice',
    'workflow',
    'ai'
  ]
},
  {
  'id': 'martinez-inc',
  'name': 'Martinez Inc',
  'description': 'Somebody strategy painting collection away occur condition onto practice glass green study well.',
  'category': 'cooking',
  'url': 'https://martinezinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'creative',
    'analysis',
    'music',
    'design'
  ]
},
  {
  'id': 'carrillo-llc',
  'name': 'Carrillo LLC',
  'description': 'Ground field store create scene mind benefit or fast realize civil.',
  'category': 'coding',
  'url': 'https://carrillollc.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'data',
    'recipe',
    'creative',
    'workflow'
  ]
},
  {
  'id': 'flores-plc',
  'name': 'Flores PLC',
  'description': 'What glass lot they account arm another environment television building discuss.',
  'category': 'productivity',
  'url': 'https://floresplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'analysis',
    'search',
    'music',
    'data'
  ]
},
  {
  'id': 'wright-rhodes-and-baxter',
  'name': 'Wright, Rhodes and Baxter',
  'description': 'Main what door me difficult director father reality your center.',
  'category': 'learning',
  'url': 'https://wright,rhodesandbaxter.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'automation',
    'productivity',
    'video',
    'analysis'
  ]
},
  {
  'id': 'anderson-colon-and-sullivan',
  'name': 'Anderson, Colon and Sullivan',
  'description': 'Create begin leg important play network ability human computer.',
  'category': 'audio',
  'url': 'https://anderson,colonandsullivan.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'video',
    'voice',
    'image',
    'music'
  ]
},
  {
  'id': 'anderson-phillips-and-gallegos',
  'name': 'Anderson, Phillips and Gallegos',
  'description': 'Attorney interesting rock medical expert clearly after case never trial along.',
  'category': 'productivity',
  'url': 'https://anderson,phillipsandgallegos.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'automation',
    'voice',
    'ai',
    'data'
  ]
},
  {
  'id': 'martinez-group',
  'name': 'Martinez Group',
  'description': 'Buy peace area direction health admit.',
  'category': 'design',
  'url': 'https://martinezgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'recipe',
    'automation',
    'search',
    'voice'
  ]
},
  {
  'id': 'lee-group',
  'name': 'Lee Group',
  'description': 'Activity three white three themselves follow brother Democrat figure apply.',
  'category': 'data',
  'url': 'https://leegroup.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'analysis',
    'recipe',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'sanchez-velasquez-and-johnson',
  'name': 'Sanchez, Velasquez and Johnson',
  'description': 'Win whatever decade picture nation company this door attorney pattern carry different.',
  'category': 'cooking',
  'url': 'https://sanchez,velasquezandjohnson.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'search',
    'voice',
    'ai',
    'video'
  ]
},
  {
  'id': 'mcfarland-llc',
  'name': 'Mcfarland LLC',
  'description': 'Until later hair until politics most including.',
  'category': 'writing',
  'url': 'https://mcfarlandllc.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'video',
    'chatbot',
    'design',
    'search'
  ]
},
  {
  'id': 'shepherd-hurst-and-dominguez',
  'name': 'Shepherd, Hurst and Dominguez',
  'description': 'Right wife result issue those where behavior expert skill table degree.',
  'category': 'image',
  'url': 'https://shepherd,hurstanddominguez.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'creative',
    'recipe',
    'image',
    'chatbot'
  ]
},
  {
  'id': 'rollins-plc',
  'name': 'Rollins PLC',
  'description': 'Down firm matter experience interesting which dog space though stand child exist fine.',
  'category': 'productivity',
  'url': 'https://rollinsplc.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'workflow',
    'automation',
    'design',
    'video'
  ]
},
  {
  'id': 'green-taylor',
  'name': 'Green-Taylor',
  'description': 'Laugh boy individual management past big.',
  'category': 'design',
  'url': 'https://green-taylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'image',
    'creative',
    'design',
    'education'
  ]
},
  {
  'id': 'donovan-johnson',
  'name': 'Donovan-Johnson',
  'description': 'Employee ask one explain attack box president single concern line itself officer really various.',
  'category': 'cooking',
  'url': 'https://donovan-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'workflow',
    'search',
    'voice',
    'automation'
  ]
},
  {
  'id': 'carter-peterson-and-oliver',
  'name': 'Carter, Peterson and Oliver',
  'description': 'Read guy tough teach business sound oil common up.',
  'category': 'customer',
  'url': 'https://carter,petersonandoliver.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'education',
    'productivity',
    'recipe',
    'search'
  ]
},
  {
  'id': 'beasley-ltd',
  'name': 'Beasley Ltd',
  'description': 'Represent consider also under yard month much exist production how reason central public.',
  'category': 'social',
  'url': 'https://beasleyltd.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'productivity',
    'automation',
    'voice',
    'education'
  ]
},
  {
  'id': 'tran-dodson',
  'name': 'Tran-Dodson',
  'description': 'Outside also his worker certainly soon risk light might.',
  'category': 'productivity',
  'url': 'https://tran-dodson.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'creative',
    'ai',
    'image',
    'productivity'
  ]
},
  {
  'id': 'meyers-llc',
  'name': 'Meyers LLC',
  'description': 'Meeting indeed theory head Republican purpose sense.',
  'category': 'learning',
  'url': 'https://meyersllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'creative',
    'video',
    'productivity',
    'image'
  ]
},
  {
  'id': 'fowler-mccullough-and-ortiz',
  'name': 'Fowler, Mccullough and Ortiz',
  'description': 'Much learn require become them training in trade which until sort point.',
  'category': 'image',
  'url': 'https://fowler,mcculloughandortiz.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'image',
    'productivity',
    'voice',
    'recipe'
  ]
},
  {
  'id': 'smith-myers',
  'name': 'Smith-Myers',
  'description': 'Common strong our among very focus red item term business degree.',
  'category': 'ideas',
  'url': 'https://smith-myers.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'recipe',
    'ai',
    'automation',
    'creative'
  ]
},
  {
  'id': 'coleman-morales-and-thomas',
  'name': 'Coleman, Morales and Thomas',
  'description': 'Again three everything we too war station whom Congress.',
  'category': 'audio',
  'url': 'https://coleman,moralesandthomas.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'design',
    'video',
    'ai',
    'creative'
  ]
},
  {
  'id': 'dean-peterson-and-morse',
  'name': 'Dean, Peterson and Morse',
  'description': 'To window history recognize him care.',
  'category': 'design',
  'url': 'https://dean,petersonandmorse.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'voice',
    'design',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'cline-ltd',
  'name': 'Cline Ltd',
  'description': 'Partner possible happen western today hospital ok hundred determine law fine kitchen.',
  'category': 'writing',
  'url': 'https://clineltd.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'productivity',
    'search',
    'education',
    'ai'
  ]
},
  {
  'id': 'snyder-and-sons',
  'name': 'Snyder and Sons',
  'description': 'Use white tend develop audience such list next partner year with.',
  'category': 'ideas',
  'url': 'https://snyderandsons.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'chatbot',
    'productivity',
    'search',
    'ai'
  ]
},
  {
  'id': 'norman-howard',
  'name': 'Norman-Howard',
  'description': 'Right for body war stop also student despite tonight Congress.',
  'category': 'audio',
  'url': 'https://norman-howard.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'data',
    'analysis',
    'chatbot',
    'search'
  ]
},
  {
  'id': 'mercado-group',
  'name': 'Mercado Group',
  'description': 'Three hit majority place energy hospital want doctor.',
  'category': 'coding',
  'url': 'https://mercadogroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'workflow',
    'image',
    'search',
    'analysis'
  ]
},
  {
  'id': 'mcneil-sanchez',
  'name': 'Mcneil-Sanchez',
  'description': 'Worry season majority travel likely number.',
  'category': 'automation',
  'url': 'https://mcneil-sanchez.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'workflow',
    'music',
    'search',
    'video'
  ]
},
  {
  'id': 'palmer-plc',
  'name': 'Palmer PLC',
  'description': 'Bit fire develop hear natural add partner carry million indicate gas black mean.',
  'category': 'ideas',
  'url': 'https://palmerplc.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'recipe',
    'education',
    'creative'
  ]
},
  {
  'id': 'norris-gonzalez-and-anderson',
  'name': 'Norris, Gonzalez and Anderson',
  'description': 'Force student at lose like listen these seven clear term think eat war.',
  'category': 'web',
  'url': 'https://norris,gonzalezandanderson.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'productivity',
    'creative',
    'video',
    'voice'
  ]
},
  {
  'id': 'simon-garcia-and-wood',
  'name': 'Simon, Garcia and Wood',
  'description': 'Heavy agreement authority body nearly to.',
  'category': 'research',
  'url': 'https://simon,garciaandwood.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'video',
    'education',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'jones-alexander-and-white',
  'name': 'Jones, Alexander and White',
  'description': 'Phone police candidate no art public cut time author.',
  'category': 'workflow',
  'url': 'https://jones,alexanderandwhite.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'productivity',
    'data',
    'education',
    'creative'
  ]
},
  {
  'id': 'schmidt-lester-and-snyder',
  'name': 'Schmidt, Lester and Snyder',
  'description': 'Turn it energy brother scene inside cost sense best check total.',
  'category': 'audio',
  'url': 'https://schmidt,lesterandsnyder.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'image',
    'search',
    'analysis',
    'ai'
  ]
},
  {
  'id': 'parks-malone-and-smith',
  'name': 'Parks, Malone and Smith',
  'description': 'Allow they teach body second suddenly.',
  'category': 'productivity',
  'url': 'https://parks,maloneandsmith.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'design',
    'search',
    'chatbot',
    'recipe'
  ]
},
  {
  'id': 'hicks-rodriguez',
  'name': 'Hicks-Rodriguez',
  'description': 'According newspaper crime south detail off.',
  'category': 'design',
  'url': 'https://hicks-rodriguez.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'analysis',
    'image',
    'productivity',
    'workflow'
  ]
},
  {
  'id': 'collins-wells-and-lopez',
  'name': 'Collins, Wells and Lopez',
  'description': 'Degree him small speak the science claim memory pressure consider himself others artist.',
  'category': 'customer',
  'url': 'https://collins,wellsandlopez.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'design',
    'music',
    'ai',
    'analysis'
  ]
},
  {
  'id': 'dominguez-and-sons',
  'name': 'Dominguez and Sons',
  'description': 'Cup and hold represent accept bank anyone appear church give begin front.',
  'category': 'writing',
  'url': 'https://dominguezandsons.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'chatbot',
    'search',
    'video',
    'education'
  ]
},
  {
  'id': 'woodard-garcia',
  'name': 'Woodard-Garcia',
  'description': 'Beautiful determine great bill exist hospital artist already social house example real.',
  'category': 'workflow',
  'url': 'https://woodard-garcia.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'workflow',
    'recipe',
    'search',
    'productivity'
  ]
},
  {
  'id': 'watkins-dennis-and-campbell',
  'name': 'Watkins, Dennis and Campbell',
  'description': 'Several difficult visit move market minute though.',
  'category': 'creativity',
  'url': 'https://watkins,dennisandcampbell.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'ai',
    'creative',
    'design',
    'analysis'
  ]
},
  {
  'id': 'griffith-chapman-and-young',
  'name': 'Griffith, Chapman and Young',
  'description': 'Foreign attorney administration medical see production if dog.',
  'category': 'video',
  'url': 'https://griffith,chapmanandyoung.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'analysis',
    'image',
    'video',
    'productivity'
  ]
},
  {
  'id': 'haynes-johnson',
  'name': 'Haynes-Johnson',
  'description': 'Practice without conference TV prepare side purpose save.',
  'category': 'data',
  'url': 'https://haynes-johnson.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'image',
    'video',
    'search',
    'data'
  ]
},
  {
  'id': 'walsh-raymond-and-webb',
  'name': 'Walsh, Raymond and Webb',
  'description': 'Real together term send weight behind line parent statement share claim play.',
  'category': 'data',
  'url': 'https://walsh,raymondandwebb.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'music',
    'design',
    'workflow',
    'recipe'
  ]
},
  {
  'id': 'hopkins-group',
  'name': 'Hopkins Group',
  'description': 'Want least already summer process book crime play word capital.',
  'category': 'audio',
  'url': 'https://hopkinsgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'music',
    'recipe',
    'creative',
    'search'
  ]
},
  {
  'id': 'escobar-gardner-and-francis',
  'name': 'Escobar, Gardner and Francis',
  'description': 'Training ahead sound evening among even have pattern he imagine state store matter.',
  'category': 'writing',
  'url': 'https://escobar,gardnerandfrancis.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'chatbot',
    'recipe',
    'productivity',
    'creative'
  ]
},
  {
  'id': 'lutz-steele-and-bell',
  'name': 'Lutz, Steele and Bell',
  'description': 'Into although soldier design college month course same start game energy land.',
  'category': 'video',
  'url': 'https://lutz,steeleandbell.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'voice',
    'search',
    'analysis',
    'ai'
  ]
},
  {
  'id': 'rodgers-group',
  'name': 'Rodgers Group',
  'description': 'Natural all region indeed town choice compare little.',
  'category': 'audio',
  'url': 'https://rodgersgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'productivity',
    'search',
    'image',
    'automation'
  ]
},
  {
  'id': 'dickerson-powell',
  'name': 'Dickerson-Powell',
  'description': 'Way strong thought teach attorney serious receive company young.',
  'category': 'presentations',
  'url': 'https://dickerson-powell.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'productivity',
    'automation',
    'ai',
    'chatbot'
  ]
},
  {
  'id': 'scott-graves-and-mckinney',
  'name': 'Scott, Graves and Mckinney',
  'description': 'Remain great mean help actually physical each former.',
  'category': 'web',
  'url': 'https://scott,gravesandmckinney.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'automation',
    'ai',
    'image',
    'video'
  ]
},
  {
  'id': 'palmer-wallace-and-smith',
  'name': 'Palmer, Wallace and Smith',
  'description': 'Anything large clear significant deal billion around claim husband view lawyer.',
  'category': 'workflow',
  'url': 'https://palmer,wallaceandsmith.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'education',
    'video',
    'ai',
    'design'
  ]
},
  {
  'id': 'cox-price',
  'name': 'Cox-Price',
  'description': 'Her treat item certain place relate simply.',
  'category': 'social',
  'url': 'https://cox-price.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'chatbot',
    'analysis',
    'automation',
    'workflow'
  ]
},
  {
  'id': 'nixon-johnson-and-smith',
  'name': 'Nixon, Johnson and Smith',
  'description': 'Newspaper eight good other rise whose blood no thousand.',
  'category': 'workflow',
  'url': 'https://nixon,johnsonandsmith.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'search',
    'ai',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'lynn-delgado',
  'name': 'Lynn-Delgado',
  'description': 'Hot care seem none understand part.',
  'category': 'ideas',
  'url': 'https://lynn-delgado.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'search',
    'video',
    'automation',
    'music'
  ]
},
  {
  'id': 'moore-mcgee',
  'name': 'Moore-Mcgee',
  'description': 'Rest result yeah Mr size serious wind allow put staff drop per letter live.',
  'category': 'cooking',
  'url': 'https://moore-mcgee.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'search',
    'creative',
    'ai',
    'music'
  ]
},
  {
  'id': 'jones-johnson-and-jackson',
  'name': 'Jones, Johnson and Jackson',
  'description': 'Lose side throw assume movement through word it do.',
  'category': 'learning',
  'url': 'https://jones,johnsonandjackson.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'ai',
    'analysis',
    'productivity',
    'data'
  ]
},
  {
  'id': 'chen-charles-and-nichols',
  'name': 'Chen, Charles and Nichols',
  'description': 'Occur pretty education clearly late staff effort evening worker certainly best time.',
  'category': 'writing',
  'url': 'https://chen,charlesandnichols.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'ai',
    'education',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'gordon-rodriguez-and-acosta',
  'name': 'Gordon, Rodriguez and Acosta',
  'description': 'Others throughout one bank protect modern station himself official.',
  'category': 'writing',
  'url': 'https://gordon,rodriguezandacosta.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'design',
    'workflow',
    'education',
    'productivity'
  ]
},
  {
  'id': 'west-smith',
  'name': 'West-Smith',
  'description': 'Role according study financial at imagine might PM operation hard right Mrs team.',
  'category': 'video',
  'url': 'https://west-smith.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'data',
    'analysis',
    'automation',
    'education'
  ]
},
  {
  'id': 'trevino-chan',
  'name': 'Trevino-Chan',
  'description': 'Professor late attention determine table brother allow.',
  'category': 'automation',
  'url': 'https://trevino-chan.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'search',
    'education',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'young-simmons',
  'name': 'Young-Simmons',
  'description': 'Majority wonder special million film college officer agency thousand perhaps plant month.',
  'category': 'workflow',
  'url': 'https://young-simmons.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'voice',
    'ai',
    'education',
    'automation'
  ]
},
  {
  'id': 'rowland-davidson-and-white',
  'name': 'Rowland, Davidson and White',
  'description': 'Bill address industry laugh but at reduce thing professor.',
  'category': 'ideas',
  'url': 'https://rowland,davidsonandwhite.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'search',
    'productivity',
    'image',
    'data'
  ]
},
  {
  'id': 'walsh-young-and-brown',
  'name': 'Walsh, Young and Brown',
  'description': 'Hope question bag life safe who understand ever now prepare.',
  'category': 'writing',
  'url': 'https://walsh,youngandbrown.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'education',
    'analysis',
    'video',
    'creative'
  ]
},
  {
  'id': 'yu-pope',
  'name': 'Yu-Pope',
  'description': 'Red nice top pretty player animal people Mr note then.',
  'category': 'workflow',
  'url': 'https://yu-pope.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'voice',
    'workflow',
    'search',
    'analysis'
  ]
},
  {
  'id': 'davis-bell-and-lloyd',
  'name': 'Davis, Bell and Lloyd',
  'description': 'Deal better understand occur place much action party art.',
  'category': 'data',
  'url': 'https://davis,bellandlloyd.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'creative',
    'workflow',
    'productivity',
    'analysis'
  ]
},
  {
  'id': 'white-llc',
  'name': 'White LLC',
  'description': 'Might life reality manager technology hospital hold society once then himself get.',
  'category': 'presentations',
  'url': 'https://whitellc.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'ai',
    'recipe',
    'search',
    'automation'
  ]
},
  {
  'id': 'moore-maxwell',
  'name': 'Moore-Maxwell',
  'description': 'Example happen everything past risk with other road reason project.',
  'category': 'image',
  'url': 'https://moore-maxwell.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'search',
    'recipe',
    'workflow'
  ]
},
  {
  'id': 'willis-little-and-dickson',
  'name': 'Willis, Little and Dickson',
  'description': 'Deep compare see on around always feel whose.',
  'category': 'data',
  'url': 'https://willis,littleanddickson.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'video',
    'image',
    'data',
    'chatbot'
  ]
},
  {
  'id': 'butler-murphy-and-hughes',
  'name': 'Butler, Murphy and Hughes',
  'description': 'Their claim his especially total free edge agreement time challenge.',
  'category': 'ideas',
  'url': 'https://butler,murphyandhughes.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'workflow',
    'design',
    'search',
    'data'
  ]
},
  {
  'id': 'jones-rojas',
  'name': 'Jones-Rojas',
  'description': 'Mr drive break church reduce budget third week argue necessary.',
  'category': 'presentations',
  'url': 'https://jones-rojas.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'education',
    'music',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'morgan-phillips',
  'name': 'Morgan-Phillips',
  'description': 'Just set cell professor build the.',
  'category': 'data',
  'url': 'https://morgan-phillips.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'analysis',
    'data',
    'image',
    'workflow'
  ]
},
  {
  'id': 'jackson-sanders-and-sanchez',
  'name': 'Jackson, Sanders and Sanchez',
  'description': 'Player plan someone available science describe teacher.',
  'category': 'search',
  'url': 'https://jackson,sandersandsanchez.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'automation',
    'creative',
    'voice',
    'image'
  ]
},
  {
  'id': 'alvarado-gutierrez-and-mendez',
  'name': 'Alvarado, Gutierrez and Mendez',
  'description': 'Nation start goal impact instead success different produce really heavy physical try action.',
  'category': 'coding',
  'url': 'https://alvarado,gutierrezandmendez.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'recipe',
    'search',
    'voice',
    'music'
  ]
},
  {
  'id': 'thompson-johnson',
  'name': 'Thompson-Johnson',
  'description': 'Finally bill budget citizen data consider nor over main claim success.',
  'category': 'productivity',
  'url': 'https://thompson-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'recipe',
    'education',
    'voice',
    'image'
  ]
},
  {
  'id': 'jennings-jordan',
  'name': 'Jennings-Jordan',
  'description': 'Simple dog partner give focus grow reason section live plan civil rather.',
  'category': 'automation',
  'url': 'https://jennings-jordan.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'voice',
    'data',
    'image',
    'design'
  ]
},
  {
  'id': 'carter-davis-and-cooper',
  'name': 'Carter, Davis and Cooper',
  'description': 'Stay million nor citizen enter spring they.',
  'category': 'workflow',
  'url': 'https://carter,davisandcooper.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'analysis',
    'creative',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'flores-salas-and-patterson',
  'name': 'Flores, Salas and Patterson',
  'description': 'What fear community me stuff price hot side research treatment computer skin after.',
  'category': 'social',
  'url': 'https://flores,salasandpatterson.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'voice',
    'ai',
    'image',
    'creative'
  ]
},
  {
  'id': 'gross-hart',
  'name': 'Gross-Hart',
  'description': 'Small use language actually quickly risk to window.',
  'category': 'music',
  'url': 'https://gross-hart.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'search',
    'ai',
    'recipe',
    'music'
  ]
},
  {
  'id': 'osborne-hopkins',
  'name': 'Osborne-Hopkins',
  'description': 'Charge movement station agree for reason personal piece.',
  'category': 'creativity',
  'url': 'https://osborne-hopkins.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'data',
    'video',
    'search',
    'recipe'
  ]
},
  {
  'id': 'jackson-inc',
  'name': 'Jackson Inc',
  'description': 'Pm lay improve somebody address fund involve discussion national specific reason approach.',
  'category': 'productivity',
  'url': 'https://jacksoninc.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'chatbot',
    'voice',
    'analysis',
    'recipe'
  ]
},
  {
  'id': 'thomas-holmes',
  'name': 'Thomas-Holmes',
  'description': 'Against civil late deep focus himself control.',
  'category': 'data',
  'url': 'https://thomas-holmes.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'productivity',
    'music',
    'education',
    'data'
  ]
},
  {
  'id': 'ellis-noble',
  'name': 'Ellis-Noble',
  'description': 'Democratic drop health pretty collection forward.',
  'category': 'image',
  'url': 'https://ellis-noble.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'ai',
    'data',
    'productivity',
    'image'
  ]
},
  {
  'id': 'cooke-moss-and-coleman',
  'name': 'Cooke, Moss and Coleman',
  'description': 'Occur describe certainly everything audience think.',
  'category': 'image',
  'url': 'https://cooke,mossandcoleman.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'search',
    'voice',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'clark-erickson-and-morris',
  'name': 'Clark, Erickson and Morris',
  'description': 'Arm nothing or ahead when tell collection dark now.',
  'category': 'research',
  'url': 'https://clark,ericksonandmorris.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'education',
    'design',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'taylor-cuevas',
  'name': 'Taylor-Cuevas',
  'description': 'Operation way series themselves training thank itself detail operation medical country.',
  'category': 'video',
  'url': 'https://taylor-cuevas.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'workflow',
    'data',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'kennedy-and-sons',
  'name': 'Kennedy and Sons',
  'description': 'Foreign official population reality better president.',
  'category': 'design',
  'url': 'https://kennedyandsons.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'image',
    'voice',
    'data',
    'productivity'
  ]
},
  {
  'id': 'baker-simpson-and-glass',
  'name': 'Baker, Simpson and Glass',
  'description': 'Create list movie key fly police field always difficult fly effort.',
  'category': 'video',
  'url': 'https://baker,simpsonandglass.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'music',
    'creative',
    'automation',
    'workflow'
  ]
},
  {
  'id': 'cole-kelly-and-fox',
  'name': 'Cole, Kelly and Fox',
  'description': 'Toward focus you everybody reach arrive need street move room.',
  'category': 'productivity',
  'url': 'https://cole,kellyandfox.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'music',
    'analysis',
    'image',
    'education'
  ]
},
  {
  'id': 'higgins-gibson-and-hanson',
  'name': 'Higgins, Gibson and Hanson',
  'description': 'Ahead leader technology challenge when particularly.',
  'category': 'cooking',
  'url': 'https://higgins,gibsonandhanson.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'voice',
    'analysis',
    'design',
    'education'
  ]
},
  {
  'id': 'perry-bolton',
  'name': 'Perry-Bolton',
  'description': 'Commercial start newspaper area wrong goal represent science dog early.',
  'category': 'cooking',
  'url': 'https://perry-bolton.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'design',
    'ai',
    'voice',
    'music'
  ]
},
  {
  'id': 'bowers-nelson-and-brown',
  'name': 'Bowers, Nelson and Brown',
  'description': 'Writer hospital tax should follow during.',
  'category': 'music',
  'url': 'https://bowers,nelsonandbrown.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'education',
    'automation',
    'creative',
    'analysis'
  ]
},
  {
  'id': 'ramirez-hancock-and-henderson',
  'name': 'Ramirez, Hancock and Henderson',
  'description': 'Sign big customer he ahead special community save major network station over.',
  'category': 'productivity',
  'url': 'https://ramirez,hancockandhenderson.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'productivity',
    'music',
    'voice',
    'creative'
  ]
},
  {
  'id': 'phillips-jordan-and-harris',
  'name': 'Phillips, Jordan and Harris',
  'description': 'Dog wall soon produce relationship similar into.',
  'category': 'research',
  'url': 'https://phillips,jordanandharris.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'design',
    'education',
    'creative',
    'voice'
  ]
},
  {
  'id': 'hale-velazquez',
  'name': 'Hale-Velazquez',
  'description': 'Talk success white develop anything education operation training.',
  'category': 'chat',
  'url': 'https://hale-velazquez.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'chatbot',
    'automation',
    'creative',
    'data'
  ]
},
  {
  'id': 'chandler-ellis',
  'name': 'Chandler-Ellis',
  'description': 'Commercial whether team attack edge such wear owner run.',
  'category': 'cooking',
  'url': 'https://chandler-ellis.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'data',
    'chatbot',
    'music',
    'video'
  ]
},
  {
  'id': 'ortiz-plc',
  'name': 'Ortiz PLC',
  'description': 'Short important black white week always pressure whether report feel season evening.',
  'category': 'customer',
  'url': 'https://ortizplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'design',
    'analysis',
    'image',
    'creative'
  ]
},
  {
  'id': 'johnson-davis',
  'name': 'Johnson-Davis',
  'description': 'Company might here kitchen career site behavior yes pull.',
  'category': 'web',
  'url': 'https://johnson-davis.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'creative',
    'productivity',
    'analysis',
    'education'
  ]
},
  {
  'id': 'davidson-inc',
  'name': 'Davidson Inc',
  'description': 'Law country character late situation though entire talk these far wait late.',
  'category': 'research',
  'url': 'https://davidsoninc.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'chatbot',
    'productivity',
    'analysis',
    'search'
  ]
},
  {
  'id': 'coleman-hardy-and-waters',
  'name': 'Coleman, Hardy and Waters',
  'description': 'Little visit former talk hair term win professional.',
  'category': 'chat',
  'url': 'https://coleman,hardyandwaters.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'analysis',
    'chatbot',
    'search',
    'music'
  ]
},
  {
  'id': 'bond-lowery-and-bailey',
  'name': 'Bond, Lowery and Bailey',
  'description': 'Great responsibility stay position site task billion mind son protect.',
  'category': 'chat',
  'url': 'https://bond,loweryandbailey.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'voice',
    'data',
    'ai',
    'creative'
  ]
},
  {
  'id': 'king-ltd',
  'name': 'King Ltd',
  'description': 'Modern become great set approach involve shoulder growth car per.',
  'category': 'cooking',
  'url': 'https://kingltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'search',
    'workflow',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'rodriguez-huff-and-andrews',
  'name': 'Rodriguez, Huff and Andrews',
  'description': 'Meet drug although arm good like quite help long.',
  'category': 'research',
  'url': 'https://rodriguez,huffandandrews.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'music',
    'analysis',
    'recipe',
    'ai'
  ]
},
  {
  'id': 'morales-schultz-and-martinez',
  'name': 'Morales, Schultz and Martinez',
  'description': 'Himself then wife city he write worry heart cause.',
  'category': 'music',
  'url': 'https://morales,schultzandmartinez.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'chatbot',
    'analysis',
    'automation',
    'ai'
  ]
},
  {
  'id': 'walker-campbell',
  'name': 'Walker-Campbell',
  'description': 'Serve speech truth beautiful just media.',
  'category': 'audio',
  'url': 'https://walker-campbell.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'music',
    'voice',
    'automation',
    'creative'
  ]
},
  {
  'id': 'johnson-lopez-and-jackson',
  'name': 'Johnson, Lopez and Jackson',
  'description': 'Line information girl concern something usually third hour still beyond site listen it.',
  'category': 'chat',
  'url': 'https://johnson,lopezandjackson.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'workflow',
    'music',
    'automation',
    'education'
  ]
},
  {
  'id': 'stewart-walker-and-smith',
  'name': 'Stewart, Walker and Smith',
  'description': 'Book course pattern road anything politics manage travel decide.',
  'category': 'ideas',
  'url': 'https://stewart,walkerandsmith.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'search',
    'data',
    'education',
    'productivity'
  ]
},
  {
  'id': 'stout-clark-and-hernandez',
  'name': 'Stout, Clark and Hernandez',
  'description': 'Upon avoid him front half his police big raise forward growth.',
  'category': 'research',
  'url': 'https://stout,clarkandhernandez.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'ai',
    'image',
    'music',
    'recipe'
  ]
},
  {
  'id': 'ellis-llc',
  'name': 'Ellis LLC',
  'description': 'Room individual should house position effect science wide speech ready impact interesting.',
  'category': 'workflow',
  'url': 'https://ellisllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'education',
    'design',
    'workflow',
    'search'
  ]
},
  {
  'id': 'davis-llc',
  'name': 'Davis LLC',
  'description': 'Chance beat degree senior special quality bag major firm.',
  'category': 'chat',
  'url': 'https://davisllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'chatbot',
    'productivity',
    'data',
    'recipe'
  ]
},
  {
  'id': 'park-harris',
  'name': 'Park-Harris',
  'description': 'Tell arrive race total task to under expect.',
  'category': 'writing',
  'url': 'https://park-harris.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'automation',
    'search',
    'image',
    'music'
  ]
},
  {
  'id': 'dorsey-greer-and-wise',
  'name': 'Dorsey, Greer and Wise',
  'description': 'Someone road may begin as table down center race.',
  'category': 'writing',
  'url': 'https://dorsey,greerandwise.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'education',
    'productivity',
    'creative',
    'search'
  ]
},
  {
  'id': 'pratt-and-sons',
  'name': 'Pratt and Sons',
  'description': 'List against entire lay answer anyone stage in indicate.',
  'category': 'image',
  'url': 'https://prattandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'creative',
    'analysis',
    'search',
    'data'
  ]
},
  {
  'id': 'wright-davis',
  'name': 'Wright-Davis',
  'description': 'Community consider price feel media daughter.',
  'category': 'design',
  'url': 'https://wright-davis.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'search',
    'productivity',
    'video',
    'creative'
  ]
},
  {
  'id': 'barnett-sanchez-and-alvarado',
  'name': 'Barnett, Sanchez and Alvarado',
  'description': 'Threat what nature section local left old modern decide join finish.',
  'category': 'chat',
  'url': 'https://barnett,sanchezandalvarado.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'automation',
    'education',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'stewart-inc',
  'name': 'Stewart Inc',
  'description': 'Mrs goal organization owner carry opportunity budget hundred.',
  'category': 'design',
  'url': 'https://stewartinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'productivity',
    'voice',
    'music',
    'image'
  ]
},
  {
  'id': 'mitchell-warren',
  'name': 'Mitchell-Warren',
  'description': 'Whom arrive many think pattern rock leg human room read risk course.',
  'category': 'customer',
  'url': 'https://mitchell-warren.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'search',
    'recipe',
    'chatbot',
    'ai'
  ]
},
  {
  'id': 'vega-galloway',
  'name': 'Vega-Galloway',
  'description': 'Score career wait film send civil firm citizen candidate clear response indicate.',
  'category': 'workflow',
  'url': 'https://vega-galloway.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'chatbot',
    'image',
    'workflow',
    'analysis'
  ]
},
  {
  'id': 'long-torres-and-zuniga',
  'name': 'Long, Torres and Zuniga',
  'description': 'Force student here age rather majority bring painting result.',
  'category': 'web',
  'url': 'https://long,torresandzuniga.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'chatbot',
    'creative',
    'productivity',
    'recipe'
  ]
},
  {
  'id': 'joyce-plc',
  'name': 'Joyce PLC',
  'description': 'Least piece stage few player safe born necessary despite probably reach sport.',
  'category': 'data',
  'url': 'https://joyceplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'voice',
    'workflow',
    'data',
    'music'
  ]
},
  {
  'id': 'poole-and-sons',
  'name': 'Poole and Sons',
  'description': 'Structure general party lose answer feel difficult.',
  'category': 'research',
  'url': 'https://pooleandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'music',
    'recipe',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'hoffman-boyle-and-caldwell',
  'name': 'Hoffman, Boyle and Caldwell',
  'description': 'Boy tough camera me mean indicate arm how night simple effect own.',
  'category': 'data',
  'url': 'https://hoffman,boyleandcaldwell.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'recipe',
    'workflow',
    'education',
    'voice'
  ]
},
  {
  'id': 'williams-walker',
  'name': 'Williams-Walker',
  'description': 'Early air run difference end government manager vote hope option history season course.',
  'category': 'coding',
  'url': 'https://williams-walker.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'data',
    'voice',
    'analysis',
    'automation'
  ]
},
  {
  'id': 'clark-and-sons',
  'name': 'Clark and Sons',
  'description': 'Who measure whom employee shoulder less yet.',
  'category': 'social',
  'url': 'https://clarkandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'image',
    'ai',
    'video',
    'workflow'
  ]
},
  {
  'id': 'gillespie-adams-and-smith',
  'name': 'Gillespie, Adams and Smith',
  'description': 'Very million fill reflect power long make there general artist important television campaign.',
  'category': 'chat',
  'url': 'https://gillespie,adamsandsmith.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'chatbot',
    'analysis',
    'voice',
    'recipe'
  ]
},
  {
  'id': 'casey-wong',
  'name': 'Casey-Wong',
  'description': 'Develop executive his land agree couple.',
  'category': 'ideas',
  'url': 'https://casey-wong.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'search',
    'analysis',
    'productivity',
    'creative'
  ]
},
  {
  'id': 'frank-cole-and-holloway',
  'name': 'Frank, Cole and Holloway',
  'description': 'Hospital sense discuss southern focus soon material theory.',
  'category': 'chat',
  'url': 'https://frank,coleandholloway.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'workflow',
    'data',
    'search',
    'voice'
  ]
},
  {
  'id': 'woods-roberts',
  'name': 'Woods-Roberts',
  'description': 'Whole three stage always crime member smile their direction tend.',
  'category': 'web',
  'url': 'https://woods-roberts.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'chatbot',
    'analysis',
    'productivity',
    'video'
  ]
},
  {
  'id': 'roberts-stevens-and-fleming',
  'name': 'Roberts, Stevens and Fleming',
  'description': 'Rule side stock might success history upon rate.',
  'category': 'coding',
  'url': 'https://roberts,stevensandfleming.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'image',
    'creative',
    'education',
    'ai'
  ]
},
  {
  'id': 'burns-ltd',
  'name': 'Burns Ltd',
  'description': 'Deal develop up more tonight get college test debate discover.',
  'category': 'data',
  'url': 'https://burnsltd.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'video',
    'image',
    'ai',
    'analysis'
  ]
},
  {
  'id': 'james-howard',
  'name': 'James-Howard',
  'description': 'Would few believe likely form lot season benefit show behind side term.',
  'category': 'learning',
  'url': 'https://james-howard.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'recipe',
    'video',
    'creative',
    'ai'
  ]
},
  {
  'id': 'taylor-plc',
  'name': 'Taylor PLC',
  'description': 'Set force matter plan protect mention well once subject above type.',
  'category': 'audio',
  'url': 'https://taylorplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'education',
    'chatbot',
    'voice',
    'creative'
  ]
},
  {
  'id': 'patterson-long-and-reeves',
  'name': 'Patterson, Long and Reeves',
  'description': 'Political that remain arm to test.',
  'category': 'web',
  'url': 'https://patterson,longandreeves.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'productivity',
    'music',
    'creative',
    'ai'
  ]
},
  {
  'id': 'wheeler-sharp',
  'name': 'Wheeler-Sharp',
  'description': 'Have door old mouth current health as bit player year various.',
  'category': 'social',
  'url': 'https://wheeler-sharp.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'analysis',
    'data',
    'video',
    'design'
  ]
},
  {
  'id': 'ellis-little',
  'name': 'Ellis-Little',
  'description': 'Health military blood tend general girl turn support old.',
  'category': 'cooking',
  'url': 'https://ellis-little.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'design',
    'automation',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'fields-plc',
  'name': 'Fields PLC',
  'description': 'Admit help if either first current remember avoid.',
  'category': 'search',
  'url': 'https://fieldsplc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'productivity',
    'voice',
    'ai',
    'search'
  ]
},
  {
  'id': 'benitez-watkins',
  'name': 'Benitez-Watkins',
  'description': 'Center toward cultural into large he clear foot so kitchen person so.',
  'category': 'workflow',
  'url': 'https://benitez-watkins.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'chatbot',
    'data',
    'music',
    'recipe'
  ]
},
  {
  'id': 'vaughan-schultz',
  'name': 'Vaughan-Schultz',
  'description': 'Site space stand draw management likely store result city allow own black though.',
  'category': 'music',
  'url': 'https://vaughan-schultz.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'voice',
    'chatbot',
    'search',
    'design'
  ]
},
  {
  'id': 'schmidt-rodriguez',
  'name': 'Schmidt-Rodriguez',
  'description': 'Above mention worker alone paper key education.',
  'category': 'customer',
  'url': 'https://schmidt-rodriguez.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'productivity',
    'search',
    'voice',
    'creative'
  ]
},
  {
  'id': 'peters-hammond-and-miller',
  'name': 'Peters, Hammond and Miller',
  'description': 'Lot somebody success direction my necessary wish table nice put physical.',
  'category': 'productivity',
  'url': 'https://peters,hammondandmiller.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'productivity',
    'image',
    'analysis',
    'ai'
  ]
},
  {
  'id': 'nelson-ltd',
  'name': 'Nelson Ltd',
  'description': 'Story us someone carry especially there recognize baby into modern section responsibility.',
  'category': 'writing',
  'url': 'https://nelsonltd.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'voice',
    'search',
    'image',
    'ai'
  ]
},
  {
  'id': 'thompson-young',
  'name': 'Thompson-Young',
  'description': 'Try me accept yeah meet son every others contain for suffer.',
  'category': 'ideas',
  'url': 'https://thompson-young.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'image',
    'voice',
    'creative',
    'data'
  ]
},
  {
  'id': 'goodwin-allen-and-smith',
  'name': 'Goodwin, Allen and Smith',
  'description': 'Factor try approach cost traditional only career weight character show staff share special cell.',
  'category': 'social',
  'url': 'https://goodwin,allenandsmith.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'music',
    'video',
    'workflow',
    'image'
  ]
},
  {
  'id': 'aguilar-inc',
  'name': 'Aguilar Inc',
  'description': 'Country door later professor wrong still interesting stop pattern large site theory whom.',
  'category': 'design',
  'url': 'https://aguilarinc.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'creative',
    'ai',
    'voice',
    'image'
  ]
},
  {
  'id': 'hobbs-ltd',
  'name': 'Hobbs Ltd',
  'description': 'Policy entire develop back particular area.',
  'category': 'video',
  'url': 'https://hobbsltd.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'education',
    'productivity',
    'analysis',
    'chatbot'
  ]
},
  {
  'id': 'hughes-martinez-and-hart',
  'name': 'Hughes, Martinez and Hart',
  'description': 'Back tree inside edge several stuff.',
  'category': 'productivity',
  'url': 'https://hughes,martinezandhart.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'video',
    'design',
    'automation',
    'search'
  ]
},
  {
  'id': 'gibson-cook',
  'name': 'Gibson-Cook',
  'description': 'Without above tell office commercial support.',
  'category': 'writing',
  'url': 'https://gibson-cook.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'voice',
    'recipe',
    'creative',
    'video'
  ]
},
  {
  'id': 'garrett-plc',
  'name': 'Garrett PLC',
  'description': 'Record political would and trade mind.',
  'category': 'web',
  'url': 'https://garrettplc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'recipe',
    'design',
    'education',
    'search'
  ]
},
  {
  'id': 'bell-farmer',
  'name': 'Bell-Farmer',
  'description': 'Around character reduce hair tough two call involve six sense a popular onto.',
  'category': 'data',
  'url': 'https://bell-farmer.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'automation',
    'search',
    'recipe',
    'music'
  ]
},
  {
  'id': 'romero-newman-and-jimenez',
  'name': 'Romero, Newman and Jimenez',
  'description': 'Notice writer chair high ground sing at cold us body even behind international.',
  'category': 'design',
  'url': 'https://romero,newmanandjimenez.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'productivity',
    'ai',
    'voice',
    'design'
  ]
},
  {
  'id': 'preston-figueroa-and-bryant',
  'name': 'Preston, Figueroa and Bryant',
  'description': 'Owner summer meeting political government mother what call debate.',
  'category': 'web',
  'url': 'https://preston,figueroaandbryant.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'video',
    'chatbot',
    'image',
    'workflow'
  ]
},
  {
  'id': 'berry-llc',
  'name': 'Berry LLC',
  'description': 'Tend face become reason beyond outside newspaper improve treat certain front.',
  'category': 'presentations',
  'url': 'https://berryllc.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'chatbot',
    'recipe',
    'education',
    'video'
  ]
},
  {
  'id': 'smith-johnson',
  'name': 'Smith-Johnson',
  'description': 'Design see even street manage reality serve.',
  'category': 'writing',
  'url': 'https://smith-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'design',
    'data',
    'workflow',
    'chatbot'
  ]
},
  {
  'id': 'wallace-dixon-and-coleman',
  'name': 'Wallace, Dixon and Coleman',
  'description': 'Republican nothing get manager million including his minute box future talk professional.',
  'category': 'cooking',
  'url': 'https://wallace,dixonandcoleman.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'data',
    'creative',
    'design',
    'voice'
  ]
},
  {
  'id': 'smith-klein-and-dalton',
  'name': 'Smith, Klein and Dalton',
  'description': 'He role hour idea into property.',
  'category': 'creativity',
  'url': 'https://smith,kleinanddalton.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'automation',
    'recipe',
    'music',
    'design'
  ]
},
  {
  'id': 'brown-stevenson-and-ford',
  'name': 'Brown, Stevenson and Ford',
  'description': 'Alone coach Democrat former guy them history Mr southern hotel win energy out crime.',
  'category': 'workflow',
  'url': 'https://brown,stevensonandford.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'voice',
    'productivity',
    'ai',
    'workflow'
  ]
},
  {
  'id': 'frazier-murphy-and-burns',
  'name': 'Frazier, Murphy and Burns',
  'description': 'Suddenly group against more act TV two first address look.',
  'category': 'workflow',
  'url': 'https://frazier,murphyandburns.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'education',
    'video',
    'analysis',
    'automation'
  ]
},
  {
  'id': 'thomas-ellis-and-smith',
  'name': 'Thomas, Ellis and Smith',
  'description': 'Place make necessary the general already window girl sound box easy talk.',
  'category': 'customer',
  'url': 'https://thomas,ellisandsmith.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'image',
    'education',
    'chatbot',
    'music'
  ]
},
  {
  'id': 'collins-jones',
  'name': 'Collins-Jones',
  'description': 'Leader police prepare service tough support kitchen.',
  'category': 'workflow',
  'url': 'https://collins-jones.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'productivity',
    'music',
    'video',
    'image'
  ]
},
  {
  'id': 'collier-ltd',
  'name': 'Collier Ltd',
  'description': 'Really nice hundred ball Democrat five sound image soldier.',
  'category': 'research',
  'url': 'https://collierltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'image',
    'video',
    'search',
    'education'
  ]
},
  {
  'id': 'moreno-hahn',
  'name': 'Moreno-Hahn',
  'description': 'Build create support send fast crime fill one commercial best consumer.',
  'category': 'image',
  'url': 'https://moreno-hahn.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'design',
    'video',
    'workflow',
    'search'
  ]
},
  {
  'id': 'ward-gordon-and-tate',
  'name': 'Ward, Gordon and Tate',
  'description': 'Green future thank single join course.',
  'category': 'data',
  'url': 'https://ward,gordonandtate.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'recipe',
    'workflow',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'jones-bender-and-mcbride',
  'name': 'Jones, Bender and Mcbride',
  'description': 'Charge however cold doctor measure amount decide example.',
  'category': 'social',
  'url': 'https://jones,benderandmcbride.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'data',
    'automation',
    'music',
    'design'
  ]
},
  {
  'id': 'bray-inc',
  'name': 'Bray Inc',
  'description': 'Congress threat natural impact successful recently require go pressure quality.',
  'category': 'automation',
  'url': 'https://brayinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'video',
    'voice',
    'music',
    'education'
  ]
},
  {
  'id': 'benitez-flores',
  'name': 'Benitez-Flores',
  'description': 'Technology give course president officer may without model push court.',
  'category': 'automation',
  'url': 'https://benitez-flores.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'analysis',
    'creative',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'baker-castro-and-johnson',
  'name': 'Baker, Castro and Johnson',
  'description': 'Win unit begin base ground realize most language concern.',
  'category': 'productivity',
  'url': 'https://baker,castroandjohnson.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'workflow',
    'chatbot',
    'recipe',
    'image'
  ]
},
  {
  'id': 'travis-anderson-and-mayo',
  'name': 'Travis, Anderson and Mayo',
  'description': 'Rule community attention how difficult success player church.',
  'category': 'research',
  'url': 'https://travis,andersonandmayo.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'image',
    'workflow',
    'design',
    'education'
  ]
},
  {
  'id': 'walker-pratt-and-young',
  'name': 'Walker, Pratt and Young',
  'description': 'Film account stage whose step guess manager bill push local method hair in.',
  'category': 'workflow',
  'url': 'https://walker,prattandyoung.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'search',
    'chatbot',
    'creative',
    'image'
  ]
},
  {
  'id': 'lambert-davis-and-cooke',
  'name': 'Lambert, Davis and Cooke',
  'description': 'Ask media TV day to serve century.',
  'category': 'image',
  'url': 'https://lambert,davisandcooke.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'search',
    'data',
    'education',
    'analysis'
  ]
},
  {
  'id': 'stanton-ltd',
  'name': 'Stanton Ltd',
  'description': 'Wide message business real different deal.',
  'category': 'presentations',
  'url': 'https://stantonltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'ai',
    'search',
    'image',
    'chatbot'
  ]
},
  {
  'id': 'curry-banks',
  'name': 'Curry-Banks',
  'description': 'Pm help clear pay teacher majority man him picture wife task boy care.',
  'category': 'writing',
  'url': 'https://curry-banks.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'video',
    'productivity',
    'data',
    'search'
  ]
},
  {
  'id': 'davis-gonzalez',
  'name': 'Davis-Gonzalez',
  'description': 'Local next around structure give discussion onto anyone yes huge type under role.',
  'category': 'coding',
  'url': 'https://davis-gonzalez.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'education',
    'voice',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'hernandez-inc',
  'name': 'Hernandez Inc',
  'description': 'Plan its personal development trial large meet rate ago our.',
  'category': 'learning',
  'url': 'https://hernandezinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'search',
    'data',
    'voice',
    'ai'
  ]
},
  {
  'id': 'delgado-richmond-and-gonzalez',
  'name': 'Delgado, Richmond and Gonzalez',
  'description': 'High but later free shoulder consumer truth turn real possible young.',
  'category': 'creativity',
  'url': 'https://delgado,richmondandgonzalez.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'voice',
    'search',
    'design',
    'ai'
  ]
},
  {
  'id': 'smith-williams',
  'name': 'Smith-Williams',
  'description': 'Allow occur buy body leg me middle hand expert fund option nothing.',
  'category': 'audio',
  'url': 'https://smith-williams.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'data',
    'productivity',
    'chatbot',
    'creative'
  ]
},
  {
  'id': 'simmons-johnson',
  'name': 'Simmons-Johnson',
  'description': 'Man me their theory firm a discover defense.',
  'category': 'creativity',
  'url': 'https://simmons-johnson.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'data',
    'analysis',
    'search',
    'design'
  ]
},
  {
  'id': 'juarez-inc',
  'name': 'Juarez Inc',
  'description': 'Foreign particularly alone religious east least stand the bring language PM blue.',
  'category': 'productivity',
  'url': 'https://juarezinc.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'ai',
    'education',
    'video',
    'voice'
  ]
},
  {
  'id': 'benson-blair-and-marshall',
  'name': 'Benson, Blair and Marshall',
  'description': 'Occur size often talk expert among tonight small environment often serious.',
  'category': 'productivity',
  'url': 'https://benson,blairandmarshall.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'video',
    'data',
    'search',
    'image'
  ]
},
  {
  'id': 'mendoza-plc',
  'name': 'Mendoza PLC',
  'description': 'White purpose after white well can usually say account.',
  'category': 'design',
  'url': 'https://mendozaplc.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'workflow',
    'voice',
    'music',
    'education'
  ]
},
  {
  'id': 'foley-holland-and-jones',
  'name': 'Foley, Holland and Jones',
  'description': 'See here growth oil rate factor.',
  'category': 'chat',
  'url': 'https://foley,hollandandjones.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'analysis',
    'ai',
    'video',
    'education'
  ]
},
  {
  'id': 'castillo-manning',
  'name': 'Castillo-Manning',
  'description': 'Newspaper west outside charge out young fish and this parent standard.',
  'category': 'cooking',
  'url': 'https://castillo-manning.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'analysis',
    'voice',
    'chatbot',
    'search'
  ]
},
  {
  'id': 'lindsey-henry-and-carlson',
  'name': 'Lindsey, Henry and Carlson',
  'description': 'Song receive lead piece spring west perhaps man pattern since firm.',
  'category': 'ideas',
  'url': 'https://lindsey,henryandcarlson.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'analysis',
    'voice',
    'design',
    'image'
  ]
},
  {
  'id': 'vasquez-llc',
  'name': 'Vasquez LLC',
  'description': 'Pattern life able item remember indicate consumer.',
  'category': 'presentations',
  'url': 'https://vasquezllc.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'workflow',
    'voice',
    'chatbot',
    'ai'
  ]
},
  {
  'id': 'weaver-reid',
  'name': 'Weaver-Reid',
  'description': 'College never tonight business enough property body site magazine order walk.',
  'category': 'ideas',
  'url': 'https://weaver-reid.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'chatbot',
    'creative',
    'data',
    'ai'
  ]
},
  {
  'id': 'turner-ltd',
  'name': 'Turner Ltd',
  'description': 'Small respond up look thousand moment strong house read.',
  'category': 'learning',
  'url': 'https://turnerltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'chatbot',
    'ai',
    'search',
    'workflow'
  ]
},
  {
  'id': 'gonzalez-inc',
  'name': 'Gonzalez Inc',
  'description': 'Available despite game actually stop standard child.',
  'category': 'design',
  'url': 'https://gonzalezinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'workflow',
    'video',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'mcgee-smith-and-hall',
  'name': 'Mcgee, Smith and Hall',
  'description': 'Until cut size page east bank current movie wall.',
  'category': 'research',
  'url': 'https://mcgee,smithandhall.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'workflow',
    'creative',
    'data',
    'video'
  ]
},
  {
  'id': 'burgess-frazier',
  'name': 'Burgess-Frazier',
  'description': 'Election especially nature country who admit give note these evening surface.',
  'category': 'data',
  'url': 'https://burgess-frazier.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'chatbot',
    'data',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'daugherty-llc',
  'name': 'Daugherty LLC',
  'description': 'Bring myself he their remember might kind week.',
  'category': 'music',
  'url': 'https://daughertyllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'design',
    'music',
    'education',
    'image'
  ]
},
  {
  'id': 'hess-plc',
  'name': 'Hess PLC',
  'description': 'Try cause guy meeting front increase environment culture actually.',
  'category': 'customer',
  'url': 'https://hessplc.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'search',
    'creative',
    'automation',
    'voice'
  ]
},
  {
  'id': 'alvarez-gill-and-mullins',
  'name': 'Alvarez, Gill and Mullins',
  'description': 'Tv movie ball increase woman reality vote thank specific.',
  'category': 'writing',
  'url': 'https://alvarez,gillandmullins.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'design',
    'education',
    'image',
    'workflow'
  ]
},
  {
  'id': 'vasquez-plc',
  'name': 'Vasquez PLC',
  'description': 'Against stock social identify hot very point still final system use fund.',
  'category': 'workflow',
  'url': 'https://vasquezplc.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'search',
    'chatbot',
    'design',
    'voice'
  ]
},
  {
  'id': 'watson-hughes',
  'name': 'Watson-Hughes',
  'description': 'Exactly parent necessary very and money whole there during.',
  'category': 'search',
  'url': 'https://watson-hughes.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'workflow',
    'recipe',
    'chatbot',
    'design'
  ]
},
  {
  'id': 'williams-edwards',
  'name': 'Williams-Edwards',
  'description': 'Tough behind music unit research a mouth meet.',
  'category': 'learning',
  'url': 'https://williams-edwards.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'voice',
    'ai',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'willis-inc',
  'name': 'Willis Inc',
  'description': 'Offer eat newspaper tree event affect trial culture.',
  'category': 'cooking',
  'url': 'https://willisinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'productivity',
    'data',
    'recipe',
    'search'
  ]
},
  {
  'id': 'moore-plc',
  'name': 'Moore PLC',
  'description': 'Answer picture record least themselves resource provide entire level among then.',
  'category': 'music',
  'url': 'https://mooreplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'ai',
    'design',
    'video',
    'creative'
  ]
},
  {
  'id': 'sexton-and-sons',
  'name': 'Sexton and Sons',
  'description': 'Machine hard still increase whether fish current I them training administration car respond.',
  'category': 'coding',
  'url': 'https://sextonandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'ai',
    'search',
    'video',
    'design'
  ]
},
  {
  'id': 'zimmerman-daniels-and-newton',
  'name': 'Zimmerman, Daniels and Newton',
  'description': 'Team become bring type role front kid.',
  'category': 'creativity',
  'url': 'https://zimmerman,danielsandnewton.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'data',
    'productivity',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'taylor-clark',
  'name': 'Taylor-Clark',
  'description': 'Something similar know matter guess commercial whatever same hot truth.',
  'category': 'automation',
  'url': 'https://taylor-clark.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'music',
    'analysis',
    'ai',
    'chatbot'
  ]
},
  {
  'id': 'martinez-and-sons',
  'name': 'Martinez and Sons',
  'description': 'Easy yard quality turn former leg month play his stage.',
  'category': 'data',
  'url': 'https://martinezandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'ai',
    'video',
    'recipe',
    'data'
  ]
},
  {
  'id': 'hall-lewis-and-conway',
  'name': 'Hall, Lewis and Conway',
  'description': 'Technology left fund opportunity these collection try.',
  'category': 'productivity',
  'url': 'https://hall,lewisandconway.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'creative',
    'education',
    'image',
    'chatbot'
  ]
},
  {
  'id': 'payne-sampson-and-weiss',
  'name': 'Payne, Sampson and Weiss',
  'description': 'Nation hundred town shoulder bar customer with happy evidence save second statement worker.',
  'category': 'research',
  'url': 'https://payne,sampsonandweiss.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'creative',
    'data',
    'workflow',
    'analysis'
  ]
},
  {
  'id': 'medina-group',
  'name': 'Medina Group',
  'description': 'Employee too because sea fear name let eat here above line.',
  'category': 'music',
  'url': 'https://medinagroup.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'voice',
    'creative',
    'ai',
    'productivity'
  ]
},
  {
  'id': 'perez-deleon-and-cabrera',
  'name': 'Perez, Deleon and Cabrera',
  'description': 'Put prove staff per what call help family view wonder do per.',
  'category': 'creativity',
  'url': 'https://perez,deleonandcabrera.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'analysis',
    'productivity',
    'automation',
    'image'
  ]
},
  {
  'id': 'sullivan-llc',
  'name': 'Sullivan LLC',
  'description': 'Various center yet party nice throw.',
  'category': 'data',
  'url': 'https://sullivanllc.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'music',
    'data',
    'image',
    'creative'
  ]
},
  {
  'id': 'smith-palmer',
  'name': 'Smith-Palmer',
  'description': 'Peace dark specific network several get police worry bit.',
  'category': 'research',
  'url': 'https://smith-palmer.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'image',
    'creative',
    'design',
    'recipe'
  ]
},
  {
  'id': 'hicks-robinson',
  'name': 'Hicks-Robinson',
  'description': 'Production gun citizen figure two challenge.',
  'category': 'productivity',
  'url': 'https://hicks-robinson.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'chatbot',
    'voice',
    'productivity',
    'data'
  ]
},
  {
  'id': 'brown-llc',
  'name': 'Brown LLC',
  'description': 'Age heavy condition view guess various number authority very however.',
  'category': 'productivity',
  'url': 'https://brownllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'music',
    'education',
    'workflow',
    'design'
  ]
},
  {
  'id': 'schneider-martin-and-russo',
  'name': 'Schneider, Martin and Russo',
  'description': 'Herself thousand recently week how toward up attorney certainly create like month company above.',
  'category': 'productivity',
  'url': 'https://schneider,martinandrusso.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'productivity',
    'chatbot',
    'education',
    'search'
  ]
},
  {
  'id': 'taylor-johnson-and-jefferson',
  'name': 'Taylor, Johnson and Jefferson',
  'description': 'Success wonder girl statement recently by writer foreign key hotel company life.',
  'category': 'learning',
  'url': 'https://taylor,johnsonandjefferson.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'voice',
    'education',
    'image',
    'analysis'
  ]
},
  {
  'id': 'cook-green',
  'name': 'Cook-Green',
  'description': 'Each establish meeting likely wide less.',
  'category': 'design',
  'url': 'https://cook-green.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'creative',
    'education',
    'image',
    'automation'
  ]
},
  {
  'id': 'ortiz-herman',
  'name': 'Ortiz-Herman',
  'description': 'Watch Democrat five local individual rich various allow.',
  'category': 'learning',
  'url': 'https://ortiz-herman.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'automation',
    'ai',
    'education',
    'video'
  ]
},
  {
  'id': 'rhodes-inc',
  'name': 'Rhodes Inc',
  'description': 'Material yourself suddenly despite full room seek us.',
  'category': 'video',
  'url': 'https://rhodesinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'chatbot',
    'data',
    'ai',
    'workflow'
  ]
},
  {
  'id': 'ross-plc',
  'name': 'Ross PLC',
  'description': 'Bank address mention above interview baby unit.',
  'category': 'productivity',
  'url': 'https://rossplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'education',
    'ai',
    'automation',
    'workflow'
  ]
},
  {
  'id': 'stout-parker-and-horton',
  'name': 'Stout, Parker and Horton',
  'description': 'Whose player kitchen everybody then vote radio.',
  'category': 'customer',
  'url': 'https://stout,parkerandhorton.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'creative',
    'productivity',
    'search',
    'image'
  ]
},
  {
  'id': 'henderson-llc',
  'name': 'Henderson LLC',
  'description': 'Voice level south born account answer scientist woman activity which hair if.',
  'category': 'search',
  'url': 'https://hendersonllc.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'music',
    'image',
    'recipe',
    'workflow'
  ]
},
  {
  'id': 'gonzalez-henderson',
  'name': 'Gonzalez-Henderson',
  'description': 'Follow audience fund agreement feeling list across easy value base fall message mother.',
  'category': 'customer',
  'url': 'https://gonzalez-henderson.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'image',
    'creative',
    'education',
    'chatbot'
  ]
},
  {
  'id': 'mendoza-group',
  'name': 'Mendoza Group',
  'description': 'Type miss will history organization imagine improve group foot item five son.',
  'category': 'productivity',
  'url': 'https://mendozagroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'automation',
    'productivity',
    'recipe',
    'creative'
  ]
},
  {
  'id': 'cobb-and-sons',
  'name': 'Cobb and Sons',
  'description': 'Understand wide show statement seat also.',
  'category': 'presentations',
  'url': 'https://cobbandsons.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'recipe',
    'education',
    'data',
    'workflow'
  ]
},
  {
  'id': 'riley-davis-and-wallace',
  'name': 'Riley, Davis and Wallace',
  'description': 'Only indicate least production try nothing.',
  'category': 'writing',
  'url': 'https://riley,davisandwallace.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'image',
    'voice',
    'ai',
    'productivity'
  ]
},
  {
  'id': 'gomez-patterson',
  'name': 'Gomez-Patterson',
  'description': 'Tv spend community hot quite Democrat actually machine.',
  'category': 'automation',
  'url': 'https://gomez-patterson.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'chatbot',
    'analysis',
    'image',
    'education'
  ]
},
  {
  'id': 'wilson-and-sons',
  'name': 'Wilson and Sons',
  'description': 'Financial last edge friend save summer.',
  'category': 'video',
  'url': 'https://wilsonandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'automation',
    'workflow',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'james-group',
  'name': 'James Group',
  'description': 'Teacher notice key fly onto beyond most poor return letter poor.',
  'category': 'music',
  'url': 'https://jamesgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'creative',
    'automation',
    'voice',
    'search'
  ]
},
  {
  'id': 'garcia-inc',
  'name': 'Garcia Inc',
  'description': 'Career deep lay provide movie model.',
  'category': 'web',
  'url': 'https://garciainc.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'music',
    'creative',
    'analysis',
    'data'
  ]
},
  {
  'id': 'williams-stewart',
  'name': 'Williams-Stewart',
  'description': 'Difficult offer executive yard visit around star television form team.',
  'category': 'writing',
  'url': 'https://williams-stewart.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'workflow',
    'video',
    'music',
    'voice'
  ]
},
  {
  'id': 'gibson-and-sons',
  'name': 'Gibson and Sons',
  'description': 'Cultural later score standard political else wide middle over cultural president cup despite.',
  'category': 'customer',
  'url': 'https://gibsonandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'music',
    'design',
    'creative',
    'image'
  ]
},
  {
  'id': 'walsh-kelley-and-reed',
  'name': 'Walsh, Kelley and Reed',
  'description': 'Maintain per item others national much music third friend possible down group argue.',
  'category': 'social',
  'url': 'https://walsh,kelleyandreed.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'ai',
    'analysis',
    'music',
    'recipe'
  ]
},
  {
  'id': 'wilson-smith',
  'name': 'Wilson-Smith',
  'description': 'Go effort that sit safe onto beautiful those teacher hour few thousand hot.',
  'category': 'automation',
  'url': 'https://wilson-smith.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'creative',
    'data',
    'recipe',
    'automation'
  ]
},
  {
  'id': 'parrish-armstrong-and-sanchez',
  'name': 'Parrish, Armstrong and Sanchez',
  'description': 'Present capital audience most so way describe whether sign as purpose.',
  'category': 'customer',
  'url': 'https://parrish,armstrongandsanchez.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'productivity',
    'recipe',
    'workflow',
    'video'
  ]
},
  {
  'id': 'hamilton-lynch-and-miller',
  'name': 'Hamilton, Lynch and Miller',
  'description': 'Middle wonder relate trouble expert crime moment add table.',
  'category': 'music',
  'url': 'https://hamilton,lynchandmiller.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'automation',
    'design',
    'creative',
    'workflow'
  ]
},
  {
  'id': 'rhodes-harris',
  'name': 'Rhodes-Harris',
  'description': 'Marriage step western mission some coach beat.',
  'category': 'creativity',
  'url': 'https://rhodes-harris.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'search',
    'automation',
    'voice',
    'ai'
  ]
},
  {
  'id': 'bailey-perry-and-martin',
  'name': 'Bailey, Perry and Martin',
  'description': 'Section senior today face piece challenge source year.',
  'category': 'research',
  'url': 'https://bailey,perryandmartin.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'video',
    'image',
    'recipe',
    'data'
  ]
},
  {
  'id': 'lara-mack',
  'name': 'Lara-Mack',
  'description': 'Right TV enter speech subject beat pull rock watch listen woman who government.',
  'category': 'productivity',
  'url': 'https://lara-mack.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'video',
    'image',
    'search',
    'workflow'
  ]
},
  {
  'id': 'davis-harper',
  'name': 'Davis-Harper',
  'description': 'Color process town this price least difference bill yeah adult treatment.',
  'category': 'productivity',
  'url': 'https://davis-harper.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'video',
    'workflow',
    'creative',
    'chatbot'
  ]
},
  {
  'id': 'mcbride-hall',
  'name': 'Mcbride-Hall',
  'description': 'Politics produce ahead list measure southern between network oil his whether second help.',
  'category': 'image',
  'url': 'https://mcbride-hall.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'video',
    'workflow',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'wu-serrano-and-dorsey',
  'name': 'Wu, Serrano and Dorsey',
  'description': 'Least factor know hear democratic three positive rise involve so yard.',
  'category': 'learning',
  'url': 'https://wu,serranoanddorsey.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'workflow',
    'music',
    'image',
    'search'
  ]
},
  {
  'id': 'mason-and-sons',
  'name': 'Mason and Sons',
  'description': 'Believe above decide reflect able audience bank generation us.',
  'category': 'customer',
  'url': 'https://masonandsons.ai',
  'pricing': 'free',
  'keywords': [
    'music',
    'voice',
    'creative',
    'ai',
    'video'
  ]
},
  {
  'id': 'griffin-murray-and-lindsey',
  'name': 'Griffin, Murray and Lindsey',
  'description': 'Live vote owner big institution alone color past some.',
  'category': 'search',
  'url': 'https://griffin,murrayandlindsey.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'automation',
    'ai',
    'music',
    'design'
  ]
},
  {
  'id': 'graham-hudson-and-stanton',
  'name': 'Graham, Hudson and Stanton',
  'description': 'Knowledge participant with ground down might order its first.',
  'category': 'customer',
  'url': 'https://graham,hudsonandstanton.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'analysis',
    'data',
    'workflow',
    'recipe'
  ]
},
  {
  'id': 'chavez-briggs-and-stewart',
  'name': 'Chavez, Briggs and Stewart',
  'description': 'Continue term occur provide star effect study.',
  'category': 'social',
  'url': 'https://chavez,briggsandstewart.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'video',
    'productivity',
    'data',
    'analysis'
  ]
},
  {
  'id': 'perez-warren',
  'name': 'Perez-Warren',
  'description': 'Get treatment month science lay easy already involve act tough close instead.',
  'category': 'presentations',
  'url': 'https://perez-warren.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'search',
    'design',
    'image',
    'voice'
  ]
},
  {
  'id': 'cook-ltd',
  'name': 'Cook Ltd',
  'description': 'Reason ten pattern into represent country.',
  'category': 'creativity',
  'url': 'https://cookltd.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'video',
    'education',
    'creative',
    'workflow'
  ]
},
  {
  'id': 'rivera-ltd',
  'name': 'Rivera Ltd',
  'description': 'Health factor dinner left save consumer later song reflect produce cover.',
  'category': 'customer',
  'url': 'https://riveraltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'video',
    'data',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'allen-rosales-and-wilson',
  'name': 'Allen, Rosales and Wilson',
  'description': 'Major arrive memory plant more PM school start after thank our.',
  'category': 'search',
  'url': 'https://allen,rosalesandwilson.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'music',
    'recipe',
    'chatbot',
    'video'
  ]
},
  {
  'id': 'estes-powell',
  'name': 'Estes-Powell',
  'description': 'Probably want fine special wrong together edge behavior economic then mission source season.',
  'category': 'workflow',
  'url': 'https://estes-powell.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'search',
    'ai',
    'voice',
    'education'
  ]
},
  {
  'id': 'lowe-curtis-and-warren',
  'name': 'Lowe, Curtis and Warren',
  'description': 'Run successful foot relationship drug moment.',
  'category': 'ideas',
  'url': 'https://lowe,curtisandwarren.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'video',
    'workflow',
    'design',
    'ai'
  ]
},
  {
  'id': 'anderson-morales',
  'name': 'Anderson-Morales',
  'description': 'Think wish religious shoulder loss smile commercial world lose significant north.',
  'category': 'research',
  'url': 'https://anderson-morales.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'music',
    'analysis',
    'design',
    'voice'
  ]
},
  {
  'id': 'mcintosh-llc',
  'name': 'Mcintosh LLC',
  'description': 'Order Mr section time painting magazine call sing foreign suffer.',
  'category': 'automation',
  'url': 'https://mcintoshllc.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'data',
    'recipe',
    'design',
    'education'
  ]
},
  {
  'id': 'lopez-macias-and-velazquez',
  'name': 'Lopez, Macias and Velazquez',
  'description': 'Game conference baby rock white involve point continue answer yeah mission name.',
  'category': 'learning',
  'url': 'https://lopez,maciasandvelazquez.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'voice',
    'data',
    'productivity',
    'automation'
  ]
},
  {
  'id': 'holden-inc',
  'name': 'Holden Inc',
  'description': 'Former list forget value bank source coach professional behavior radio player.',
  'category': 'data',
  'url': 'https://holdeninc.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'productivity',
    'video',
    'voice',
    'data'
  ]
},
  {
  'id': 'campbell-costa',
  'name': 'Campbell-Costa',
  'description': 'Suggest before seat name clear how site long president three learn.',
  'category': 'search',
  'url': 'https://campbell-costa.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'music',
    'creative',
    'design',
    'video'
  ]
},
  {
  'id': 'ray-smith',
  'name': 'Ray-Smith',
  'description': 'Board field practice five decide range sort morning result message question build least.',
  'category': 'automation',
  'url': 'https://ray-smith.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'search',
    'chatbot',
    'workflow',
    'ai'
  ]
},
  {
  'id': 'jenkins-may',
  'name': 'Jenkins-May',
  'description': 'World real ahead have get travel environmental opportunity something hospital.',
  'category': 'data',
  'url': 'https://jenkins-may.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'data',
    'education',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'jenkins-jordan',
  'name': 'Jenkins-Jordan',
  'description': 'Different new science wall end national.',
  'category': 'learning',
  'url': 'https://jenkins-jordan.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'education',
    'automation',
    'recipe',
    'image'
  ]
},
  {
  'id': 'warren-hoffman-and-richards',
  'name': 'Warren, Hoffman and Richards',
  'description': 'Traditional around mention television office drive military stay.',
  'category': 'learning',
  'url': 'https://warren,hoffmanandrichards.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'data',
    'search',
    'video',
    'design'
  ]
},
  {
  'id': 'murray-kelly-and-johnson',
  'name': 'Murray, Kelly and Johnson',
  'description': 'American girl tend specific audience second sell step end lose.',
  'category': 'customer',
  'url': 'https://murray,kellyandjohnson.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'search',
    'image',
    'creative',
    'education'
  ]
},
  {
  'id': 'holt-roberson-and-perez',
  'name': 'Holt, Roberson and Perez',
  'description': 'I table fall create point hand.',
  'category': 'social',
  'url': 'https://holt,robersonandperez.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'image',
    'music',
    'design',
    'productivity'
  ]
},
  {
  'id': 'harrison-lawrence',
  'name': 'Harrison-Lawrence',
  'description': 'Agree front message reality police he perform.',
  'category': 'social',
  'url': 'https://harrison-lawrence.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'video',
    'search',
    'productivity',
    'ai'
  ]
},
  {
  'id': 'stone-anderson',
  'name': 'Stone-Anderson',
  'description': 'Happen side customer size peace sort this.',
  'category': 'productivity',
  'url': 'https://stone-anderson.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'data',
    'ai',
    'productivity',
    'music'
  ]
},
  {
  'id': 'anderson-holloway',
  'name': 'Anderson-Holloway',
  'description': 'Produce manage someone type which man memory still pressure film.',
  'category': 'web',
  'url': 'https://anderson-holloway.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'voice',
    'search',
    'automation',
    'productivity'
  ]
},
  {
  'id': 'gonzales-robles',
  'name': 'Gonzales-Robles',
  'description': 'Quickly let third where role very property much total writer control reduce.',
  'category': 'coding',
  'url': 'https://gonzales-robles.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'recipe',
    'education',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'morrison-tran',
  'name': 'Morrison-Tran',
  'description': 'Once standard child college tax yeah over staff kitchen economic early.',
  'category': 'web',
  'url': 'https://morrison-tran.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'voice',
    'data',
    'music',
    'video'
  ]
},
  {
  'id': 'mills-plc',
  'name': 'Mills PLC',
  'description': 'Choice activity family strong concern specific imagine experience war clear environmental executive.',
  'category': 'coding',
  'url': 'https://millsplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'analysis',
    'design',
    'data',
    'search'
  ]
},
  {
  'id': 'murillo-rivers-and-wright',
  'name': 'Murillo, Rivers and Wright',
  'description': 'Interview within stuff do item sometimes force anyone.',
  'category': 'coding',
  'url': 'https://murillo,riversandwright.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'workflow',
    'analysis',
    'creative',
    'productivity'
  ]
},
  {
  'id': 'warren-reed-and-livingston',
  'name': 'Warren, Reed and Livingston',
  'description': 'Democratic music watch coach drug country fast condition own example close garden ever.',
  'category': 'music',
  'url': 'https://warren,reedandlivingston.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'music',
    'design',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'rios-ltd',
  'name': 'Rios Ltd',
  'description': 'Like tonight sometimes senior feel statement spring perhaps new would.',
  'category': 'music',
  'url': 'https://riosltd.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'data',
    'creative',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'cole-short-and-elliott',
  'name': 'Cole, Short and Elliott',
  'description': 'Heart offer development central water white soon trip suffer.',
  'category': 'research',
  'url': 'https://cole,shortandelliott.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'creative',
    'ai',
    'voice',
    'recipe'
  ]
},
  {
  'id': 'andrews-inc',
  'name': 'Andrews Inc',
  'description': 'Despite center we box six risk quickly visit enter entire.',
  'category': 'audio',
  'url': 'https://andrewsinc.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'search',
    'video',
    'recipe',
    'music'
  ]
},
  {
  'id': 'chambers-steele',
  'name': 'Chambers-Steele',
  'description': 'Suddenly dark myself point necessary they within trial official.',
  'category': 'automation',
  'url': 'https://chambers-steele.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'education',
    'video',
    'image',
    'creative'
  ]
},
  {
  'id': 'moore-reed',
  'name': 'Moore-Reed',
  'description': 'Fear five eat collection go western study several maintain early cover green arrive.',
  'category': 'web',
  'url': 'https://moore-reed.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'video',
    'music',
    'productivity',
    'voice'
  ]
},
  {
  'id': 'miller-mcdonald',
  'name': 'Miller-Mcdonald',
  'description': 'Pressure news begin just risk sign must four evidence chance.',
  'category': 'writing',
  'url': 'https://miller-mcdonald.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'recipe',
    'creative',
    'ai',
    'image'
  ]
},
  {
  'id': 'warner-solis-and-simpson',
  'name': 'Warner, Solis and Simpson',
  'description': 'Couple wind own region parent civil practice.',
  'category': 'audio',
  'url': 'https://warner,solisandsimpson.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'design',
    'video',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'long-contreras-and-petersen',
  'name': 'Long, Contreras and Petersen',
  'description': 'Study approach where morning out remember institution book generation.',
  'category': 'productivity',
  'url': 'https://long,contrerasandpetersen.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'creative',
    'search',
    'voice',
    'design'
  ]
},
  {
  'id': 'nguyen-wolfe-and-brooks',
  'name': 'Nguyen, Wolfe and Brooks',
  'description': 'Budget without write coach responsibility quite available late area mean.',
  'category': 'image',
  'url': 'https://nguyen,wolfeandbrooks.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'data',
    'automation',
    'recipe',
    'ai'
  ]
},
  {
  'id': 'reid-group',
  'name': 'Reid Group',
  'description': 'Indicate condition foreign top onto that amount.',
  'category': 'research',
  'url': 'https://reidgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'productivity',
    'ai',
    'design',
    'recipe'
  ]
},
  {
  'id': 'young-plc',
  'name': 'Young PLC',
  'description': 'Professor yourself maintain impact rock again new there nation ten eat.',
  'category': 'cooking',
  'url': 'https://youngplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'image',
    'ai',
    'video',
    'voice'
  ]
},
  {
  'id': 'wilson-wilson-and-reed',
  'name': 'Wilson, Wilson and Reed',
  'description': 'Television thought defense born reason itself whole book.',
  'category': 'productivity',
  'url': 'https://wilson,wilsonandreed.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'analysis',
    'video',
    'search',
    'ai'
  ]
},
  {
  'id': 'chandler-freeman',
  'name': 'Chandler-Freeman',
  'description': 'Relationship design operation information morning state world discover.',
  'category': 'productivity',
  'url': 'https://chandler-freeman.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'data',
    'recipe',
    'image',
    'video'
  ]
},
  {
  'id': 'ramos-llc',
  'name': 'Ramos LLC',
  'description': 'Adult way door child result hold effort become least.',
  'category': 'design',
  'url': 'https://ramosllc.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'workflow',
    'education',
    'automation',
    'music'
  ]
},
  {
  'id': 'coffey-potter-and-stein',
  'name': 'Coffey, Potter and Stein',
  'description': 'System million degree lay speak upon blood.',
  'category': 'video',
  'url': 'https://coffey,potterandstein.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'search',
    'automation',
    'image',
    'data'
  ]
},
  {
  'id': 'bell-plc',
  'name': 'Bell PLC',
  'description': 'Design paper over agreement idea offer market admit mind north western.',
  'category': 'ideas',
  'url': 'https://bellplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'voice',
    'image',
    'music',
    'productivity'
  ]
},
  {
  'id': 'white-harding',
  'name': 'White-Harding',
  'description': 'Race music upon event among dark letter without reflect marriage language.',
  'category': 'writing',
  'url': 'https://white-harding.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'recipe',
    'productivity',
    'search',
    'analysis'
  ]
},
  {
  'id': 'brown-and-sons',
  'name': 'Brown and Sons',
  'description': 'Ability give begin tend nation set child ahead big only light.',
  'category': 'social',
  'url': 'https://brownandsons.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'productivity',
    'data',
    'analysis',
    'image'
  ]
},
  {
  'id': 'potter-ltd',
  'name': 'Potter Ltd',
  'description': 'Including card about strategy short born media.',
  'category': 'coding',
  'url': 'https://potterltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'workflow',
    'creative',
    'education',
    'music'
  ]
},
  {
  'id': 'watson-dorsey',
  'name': 'Watson-Dorsey',
  'description': 'Hair personal according street sing player.',
  'category': 'web',
  'url': 'https://watson-dorsey.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'video',
    'image',
    'creative',
    'automation'
  ]
},
  {
  'id': 'craig-group',
  'name': 'Craig Group',
  'description': 'Region make can spring center glass.',
  'category': 'customer',
  'url': 'https://craiggroup.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'data',
    'creative',
    'chatbot',
    'voice'
  ]
},
  {
  'id': 'mitchell-thomas',
  'name': 'Mitchell-Thomas',
  'description': 'Perhaps season able agency price food able small Mr season heavy despite.',
  'category': 'customer',
  'url': 'https://mitchell-thomas.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'ai',
    'productivity',
    'workflow',
    'image'
  ]
},
  {
  'id': 'thomas-jimenez-and-dyer',
  'name': 'Thomas, Jimenez and Dyer',
  'description': 'Art report collection control husband hotel.',
  'category': 'presentations',
  'url': 'https://thomas,jimenezanddyer.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'design',
    'data',
    'video',
    'analysis'
  ]
},
  {
  'id': 'summers-mccarthy-and-vega',
  'name': 'Summers, Mccarthy and Vega',
  'description': 'Picture theory yard example research difficult attention edge question.',
  'category': 'chat',
  'url': 'https://summers,mccarthyandvega.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'creative',
    'workflow',
    'music',
    'design'
  ]
},
  {
  'id': 'parks-rodriguez-and-padilla',
  'name': 'Parks, Rodriguez and Padilla',
  'description': 'Few way might bring often ahead high author recognize science mission so they.',
  'category': 'writing',
  'url': 'https://parks,rodriguezandpadilla.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'design',
    'workflow',
    'music',
    'recipe'
  ]
},
  {
  'id': 'farmer-gates-and-fernandez',
  'name': 'Farmer, Gates and Fernandez',
  'description': 'Accept goal newspaper along college traditional fall perform itself.',
  'category': 'cooking',
  'url': 'https://farmer,gatesandfernandez.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'ai',
    'analysis',
    'creative',
    'automation'
  ]
},
  {
  'id': 'morris-plc',
  'name': 'Morris PLC',
  'description': 'Might maybe weight bag listen receive expert.',
  'category': 'design',
  'url': 'https://morrisplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'chatbot',
    'workflow',
    'education',
    'music'
  ]
},
  {
  'id': 'torres-brown-and-carroll',
  'name': 'Torres, Brown and Carroll',
  'description': 'Trial sound yes young measure through experience.',
  'category': 'creativity',
  'url': 'https://torres,brownandcarroll.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'design',
    'analysis',
    'ai',
    'automation'
  ]
},
  {
  'id': 'smith-bishop',
  'name': 'Smith-Bishop',
  'description': 'Quality change later play early let go before capital how.',
  'category': 'audio',
  'url': 'https://smith-bishop.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'design',
    'voice',
    'search',
    'creative'
  ]
},
  {
  'id': 'watkins-inc',
  'name': 'Watkins Inc',
  'description': 'Wall indicate already lay message someone least camera sell understand adult.',
  'category': 'coding',
  'url': 'https://watkinsinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'recipe',
    'automation',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'hansen-clark-and-ward',
  'name': 'Hansen, Clark and Ward',
  'description': 'Movement social look quickly soldier more pick.',
  'category': 'data',
  'url': 'https://hansen,clarkandward.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'automation',
    'creative',
    'video',
    'image'
  ]
},
  {
  'id': 'ramsey-inc',
  'name': 'Ramsey Inc',
  'description': 'Stage usually talk coach radio other star economy wonder glass.',
  'category': 'search',
  'url': 'https://ramseyinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'image',
    'recipe',
    'education',
    'search'
  ]
},
  {
  'id': 'griffin-cook-and-hoffman',
  'name': 'Griffin, Cook and Hoffman',
  'description': 'Once boy bar everything include against control class evidence sister effort.',
  'category': 'chat',
  'url': 'https://griffin,cookandhoffman.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'music',
    'video',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'stokes-inc',
  'name': 'Stokes Inc',
  'description': 'Reach company decide development produce man dream red ready send.',
  'category': 'coding',
  'url': 'https://stokesinc.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'workflow',
    'voice',
    'chatbot',
    'recipe'
  ]
},
  {
  'id': 'everett-collins-and-davis',
  'name': 'Everett, Collins and Davis',
  'description': 'Throughout large development opportunity who board share.',
  'category': 'web',
  'url': 'https://everett,collinsanddavis.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'analysis',
    'design',
    'data',
    'education'
  ]
},
  {
  'id': 'mcdowell-plc',
  'name': 'Mcdowell PLC',
  'description': 'Thousand reflect vote four accept remember.',
  'category': 'web',
  'url': 'https://mcdowellplc.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'analysis',
    'workflow',
    'education',
    'search'
  ]
},
  {
  'id': 'ortega-welch',
  'name': 'Ortega-Welch',
  'description': 'None available dinner throughout let practice eye.',
  'category': 'customer',
  'url': 'https://ortega-welch.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'recipe',
    'productivity',
    'design',
    'ai'
  ]
},
  {
  'id': 'frey-llc',
  'name': 'Frey LLC',
  'description': 'Thousand a deep program citizen start story like treat thank understand answer.',
  'category': 'image',
  'url': 'https://freyllc.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'education',
    'ai',
    'automation',
    'search'
  ]
},
  {
  'id': 'peterson-aguilar-and-mcguire',
  'name': 'Peterson, Aguilar and Mcguire',
  'description': 'Ready professor experience start ready ever sort four assume pattern actually.',
  'category': 'music',
  'url': 'https://peterson,aguilarandmcguire.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'search',
    'chatbot',
    'recipe',
    'automation'
  ]
},
  {
  'id': 'olson-group',
  'name': 'Olson Group',
  'description': 'Too really drug explain specific tend rather total.',
  'category': 'chat',
  'url': 'https://olsongroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'analysis',
    'automation',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'gonzalez-baldwin',
  'name': 'Gonzalez-Baldwin',
  'description': 'Part place treatment front scientist determine range others model.',
  'category': 'social',
  'url': 'https://gonzalez-baldwin.ai',
  'pricing': 'subscription',
  'keywords': [
    'voice',
    'design',
    'search',
    'ai',
    'image'
  ]
},
  {
  'id': 'young-obrien-and-vargas',
  'name': 'Young, Obrien and Vargas',
  'description': 'Stop son before film effect do plant.',
  'category': 'customer',
  'url': 'https://young,obrienandvargas.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'automation',
    'image',
    'music',
    'productivity'
  ]
},
  {
  'id': 'price-llc',
  'name': 'Price LLC',
  'description': 'Indeed say hot short happen marriage partner range item method population decade.',
  'category': 'productivity',
  'url': 'https://pricellc.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'education',
    'analysis',
    'design',
    'search'
  ]
},
  {
  'id': 'huber-and-sons',
  'name': 'Huber and Sons',
  'description': 'Service fast couple occur near lot recent clearly opportunity.',
  'category': 'chat',
  'url': 'https://huberandsons.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'search',
    'design',
    'workflow',
    'education'
  ]
},
  {
  'id': 'hancock-graves-and-taylor',
  'name': 'Hancock, Graves and Taylor',
  'description': 'Cultural she threat network we end.',
  'category': 'writing',
  'url': 'https://hancock,gravesandtaylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'chatbot',
    'data',
    'music',
    'automation'
  ]
},
  {
  'id': 'long-morris-and-lewis',
  'name': 'Long, Morris and Lewis',
  'description': 'Politics report own professional western floor join huge soldier.',
  'category': 'music',
  'url': 'https://long,morrisandlewis.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'video',
    'workflow',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'mejia-wagner-and-guzman',
  'name': 'Mejia, Wagner and Guzman',
  'description': 'Left speech hotel century week future.',
  'category': 'customer',
  'url': 'https://mejia,wagnerandguzman.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'ai',
    'data',
    'search',
    'education'
  ]
},
  {
  'id': 'hernandez-llc',
  'name': 'Hernandez LLC',
  'description': 'Remember take ball prevent shake court cause I.',
  'category': 'image',
  'url': 'https://hernandezllc.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'workflow',
    'data',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'ortiz-and-sons',
  'name': 'Ortiz and Sons',
  'description': 'Improve everything born hotel important bar anything remember discuss early among this.',
  'category': 'search',
  'url': 'https://ortizandsons.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'analysis',
    'recipe',
    'ai',
    'design'
  ]
},
  {
  'id': 'rogers-sanchez',
  'name': 'Rogers-Sanchez',
  'description': 'Avoid then hit responsibility argue which product new rather drug quality.',
  'category': 'chat',
  'url': 'https://rogers-sanchez.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'automation',
    'productivity',
    'education',
    'workflow'
  ]
},
  {
  'id': 'fuller-johnson',
  'name': 'Fuller-Johnson',
  'description': 'Someone word yes out travel table machine indeed available.',
  'category': 'productivity',
  'url': 'https://fuller-johnson.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'data',
    'ai',
    'analysis',
    'voice'
  ]
},
  {
  'id': 'sweeney-sullivan-and-delgado',
  'name': 'Sweeney, Sullivan and Delgado',
  'description': 'Himself think career memory win would.',
  'category': 'workflow',
  'url': 'https://sweeney,sullivananddelgado.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'video',
    'chatbot',
    'voice',
    'data'
  ]
},
  {
  'id': 'reyes-howard',
  'name': 'Reyes-Howard',
  'description': 'Run myself smile international several only upon show process rock.',
  'category': 'music',
  'url': 'https://reyes-howard.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'recipe',
    'creative',
    'video',
    'voice'
  ]
},
  {
  'id': 'bowman-palmer-and-anderson',
  'name': 'Bowman, Palmer and Anderson',
  'description': 'American science sport trouble response forget.',
  'category': 'productivity',
  'url': 'https://bowman,palmerandanderson.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'video',
    'ai',
    'automation',
    'creative'
  ]
},
  {
  'id': 'ramos-bell',
  'name': 'Ramos-Bell',
  'description': 'Nothing opportunity safe whether soon probably clear man two Mr development three.',
  'category': 'automation',
  'url': 'https://ramos-bell.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'music',
    'chatbot',
    'creative',
    'workflow'
  ]
},
  {
  'id': 'brown-carrillo-and-duncan',
  'name': 'Brown, Carrillo and Duncan',
  'description': 'Explain position class sit test writer fly remain there.',
  'category': 'productivity',
  'url': 'https://brown,carrilloandduncan.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'creative',
    'search',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'mckay-williams-and-fletcher',
  'name': 'Mckay, Williams and Fletcher',
  'description': 'Real threat paper difficult poor source whatever skill writer wife.',
  'category': 'workflow',
  'url': 'https://mckay,williamsandfletcher.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'ai',
    'education',
    'image',
    'workflow'
  ]
},
  {
  'id': 'riley-ortega-and-zamora',
  'name': 'Riley, Ortega and Zamora',
  'description': 'Require tax clearly industry student nor actually situation dream mission yard.',
  'category': 'research',
  'url': 'https://riley,ortegaandzamora.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'video',
    'search',
    'recipe',
    'creative'
  ]
},
  {
  'id': 'morrison-jones',
  'name': 'Morrison-Jones',
  'description': 'Back less foot one western technology certain run.',
  'category': 'creativity',
  'url': 'https://morrison-jones.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'search',
    'creative',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'hughes-gross',
  'name': 'Hughes-Gross',
  'description': 'Local indicate rise meeting goal radio green professional exactly.',
  'category': 'automation',
  'url': 'https://hughes-gross.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'video',
    'music',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'goodman-hanson-and-moore',
  'name': 'Goodman, Hanson and Moore',
  'description': 'Them bag ever number part statement professor herself.',
  'category': 'ideas',
  'url': 'https://goodman,hansonandmoore.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'video',
    'automation',
    'image',
    'analysis'
  ]
},
  {
  'id': 'long-caldwell-and-kline',
  'name': 'Long, Caldwell and Kline',
  'description': 'Have employee believe onto beautiful whole hour.',
  'category': 'workflow',
  'url': 'https://long,caldwellandkline.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'music',
    'analysis',
    'education',
    'search'
  ]
},
  {
  'id': 'smith-wallace',
  'name': 'Smith-Wallace',
  'description': 'Growth military program medical west arm.',
  'category': 'cooking',
  'url': 'https://smith-wallace.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'analysis',
    'education',
    'automation',
    'creative'
  ]
},
  {
  'id': 'bowen-lopez',
  'name': 'Bowen-Lopez',
  'description': 'Participant leave former party full effort ready medical pretty appear.',
  'category': 'presentations',
  'url': 'https://bowen-lopez.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'search',
    'recipe',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'tyler-campbell',
  'name': 'Tyler-Campbell',
  'description': 'Sign over writer product yeah among product appear.',
  'category': 'audio',
  'url': 'https://tyler-campbell.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'image',
    'search',
    'voice',
    'analysis'
  ]
},
  {
  'id': 'fernandez-plc',
  'name': 'Fernandez PLC',
  'description': 'Leave small region team behind single rise simple article sound market could.',
  'category': 'search',
  'url': 'https://fernandezplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'music',
    'design',
    'recipe',
    'chatbot'
  ]
},
  {
  'id': 'scott-lowe',
  'name': 'Scott-Lowe',
  'description': 'Someone color great write game service than everyone space.',
  'category': 'cooking',
  'url': 'https://scott-lowe.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'automation',
    'design',
    'productivity',
    'music'
  ]
},
  {
  'id': 'alvarez-group',
  'name': 'Alvarez Group',
  'description': 'And relate begin again into policy particular mind year chance item PM fear test.',
  'category': 'writing',
  'url': 'https://alvarezgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'music',
    'creative',
    'search',
    'education'
  ]
},
  {
  'id': 'alexander-stone',
  'name': 'Alexander-Stone',
  'description': 'Free past we politics middle their occur food someone design should return.',
  'category': 'social',
  'url': 'https://alexander-stone.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'chatbot',
    'music',
    'data',
    'ai'
  ]
},
  {
  'id': 'lopez-stewart',
  'name': 'Lopez-Stewart',
  'description': 'Hold month hospital personal range want blood capital.',
  'category': 'web',
  'url': 'https://lopez-stewart.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'voice',
    'recipe',
    'automation',
    'data'
  ]
},
  {
  'id': 'gentry-leon-and-sullivan',
  'name': 'Gentry, Leon and Sullivan',
  'description': 'Far reduce expert possible throughout recent experience care the tonight avoid west father.',
  'category': 'productivity',
  'url': 'https://gentry,leonandsullivan.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'design',
    'ai',
    'music',
    'image'
  ]
},
  {
  'id': 'richard-garner',
  'name': 'Richard-Garner',
  'description': 'Paper last environment hot concern care security per take.',
  'category': 'chat',
  'url': 'https://richard-garner.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'automation',
    'education',
    'search',
    'image'
  ]
},
  {
  'id': 'hill-ramirez',
  'name': 'Hill-Ramirez',
  'description': 'Spring local lead computer positive add save forget kind.',
  'category': 'creativity',
  'url': 'https://hill-ramirez.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'design',
    'workflow',
    'music',
    'automation'
  ]
},
  {
  'id': 'lewis-craig-and-martinez',
  'name': 'Lewis, Craig and Martinez',
  'description': 'Through site few key bit successful director federal perhaps election pressure.',
  'category': 'automation',
  'url': 'https://lewis,craigandmartinez.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'recipe',
    'music',
    'workflow',
    'analysis'
  ]
},
  {
  'id': 'holmes-moon-and-andrade',
  'name': 'Holmes, Moon and Andrade',
  'description': 'Congress radio term doctor road magazine.',
  'category': 'customer',
  'url': 'https://holmes,moonandandrade.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'workflow',
    'voice',
    'creative',
    'chatbot'
  ]
},
  {
  'id': 'frazier-schwartz',
  'name': 'Frazier-Schwartz',
  'description': 'Call security month another some get sound.',
  'category': 'video',
  'url': 'https://frazier-schwartz.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'recipe',
    'image',
    'ai',
    'music'
  ]
},
  {
  'id': 'massey-llc',
  'name': 'Massey LLC',
  'description': 'Guy admit reveal fund camera while language.',
  'category': 'learning',
  'url': 'https://masseyllc.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'creative',
    'search',
    'workflow',
    'recipe'
  ]
},
  {
  'id': 'lee-and-sons',
  'name': 'Lee and Sons',
  'description': 'Race newspaper read peace back against so eight garden relate fund here owner hospital.',
  'category': 'design',
  'url': 'https://leeandsons.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'chatbot',
    'education',
    'productivity',
    'video'
  ]
},
  {
  'id': 'johnson-and-sons',
  'name': 'Johnson and Sons',
  'description': 'Whom tax would certain about eat.',
  'category': 'writing',
  'url': 'https://johnsonandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'design',
    'creative',
    'automation',
    'search'
  ]
},
  {
  'id': 'harris-collier-and-reyes',
  'name': 'Harris, Collier and Reyes',
  'description': 'Tonight similar rock painting create benefit area blue.',
  'category': 'automation',
  'url': 'https://harris,collierandreyes.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'productivity',
    'data',
    'analysis',
    'ai'
  ]
},
  {
  'id': 'gross-inc',
  'name': 'Gross Inc',
  'description': 'Dinner break company appear both method our stop lot serious both want.',
  'category': 'music',
  'url': 'https://grossinc.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'music',
    'creative',
    'search',
    'productivity'
  ]
},
  {
  'id': 'boyle-hobbs',
  'name': 'Boyle-Hobbs',
  'description': 'Popular scientist plant offer day heart clear.',
  'category': 'coding',
  'url': 'https://boyle-hobbs.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'recipe',
    'search',
    'data',
    'music'
  ]
},
  {
  'id': 'sanchez-rivera-and-taylor',
  'name': 'Sanchez, Rivera and Taylor',
  'description': 'Explain production hour hold maintain land hour local thought it economic sure.',
  'category': 'automation',
  'url': 'https://sanchez,riveraandtaylor.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'creative',
    'voice',
    'automation',
    'chatbot'
  ]
},
  {
  'id': 'garcia-wilson-and-ramos',
  'name': 'Garcia, Wilson and Ramos',
  'description': 'Bag other prevent guy bank myself near price.',
  'category': 'video',
  'url': 'https://garcia,wilsonandramos.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'recipe',
    'education',
    'search',
    'design'
  ]
},
  {
  'id': 'young-lewis',
  'name': 'Young-Lewis',
  'description': 'Green thank last southern any rise join.',
  'category': 'search',
  'url': 'https://young-lewis.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'ai',
    'automation',
    'education',
    'analysis'
  ]
},
  {
  'id': 'williams-bender-and-hill',
  'name': 'Williams, Bender and Hill',
  'description': 'Especially field set score store visit your side husband number light from picture.',
  'category': 'web',
  'url': 'https://williams,benderandhill.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'voice',
    'workflow',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'mooney-and-sons',
  'name': 'Mooney and Sons',
  'description': 'Exist evening try truth site nearly cut life picture young.',
  'category': 'search',
  'url': 'https://mooneyandsons.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'image',
    'recipe',
    'workflow',
    'design'
  ]
},
  {
  'id': 'everett-and-sons',
  'name': 'Everett and Sons',
  'description': 'Edge left reality shoulder modern focus throughout call federal none man family a.',
  'category': 'coding',
  'url': 'https://everettandsons.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'education',
    'workflow',
    'video',
    'ai'
  ]
},
  {
  'id': 'rodriguez-group',
  'name': 'Rodriguez Group',
  'description': 'Generation past air girl test base season nature pass beautiful around positive.',
  'category': 'ideas',
  'url': 'https://rodriguezgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'productivity',
    'recipe',
    'education',
    'ai'
  ]
},
  {
  'id': 'sims-mccall-and-martin',
  'name': 'Sims, Mccall and Martin',
  'description': 'Notice goal team land fear tax threat watch.',
  'category': 'creativity',
  'url': 'https://sims,mccallandmartin.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'music',
    'recipe',
    'video',
    'workflow'
  ]
},
  {
  'id': 'becker-peck-and-moore',
  'name': 'Becker, Peck and Moore',
  'description': 'Official remain similar opportunity ball enjoy drive change responsibility chair structure talk test.',
  'category': 'chat',
  'url': 'https://becker,peckandmoore.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'data',
    'recipe',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'smith-llc',
  'name': 'Smith LLC',
  'description': 'Region yourself about win recognize yard college question win hospital.',
  'category': 'search',
  'url': 'https://smithllc.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'design',
    'recipe',
    'automation',
    'image'
  ]
},
  {
  'id': 'vazquez-fletcher-and-rodriguez',
  'name': 'Vazquez, Fletcher and Rodriguez',
  'description': 'Until charge author east color list poor.',
  'category': 'audio',
  'url': 'https://vazquez,fletcherandrodriguez.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'education',
    'design',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'ball-edwards-and-powell',
  'name': 'Ball, Edwards and Powell',
  'description': 'School position part energy apply world military must performance.',
  'category': 'web',
  'url': 'https://ball,edwardsandpowell.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'chatbot',
    'image',
    'automation',
    'recipe'
  ]
},
  {
  'id': 'tran-garcia-and-salazar',
  'name': 'Tran, Garcia and Salazar',
  'description': 'Company example rock yourself kitchen still almost knowledge.',
  'category': 'writing',
  'url': 'https://tran,garciaandsalazar.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'productivity',
    'chatbot',
    'video',
    'data'
  ]
},
  {
  'id': 'carter-porter-and-delacruz',
  'name': 'Carter, Porter and Delacruz',
  'description': 'Person win song night concern way door day right.',
  'category': 'search',
  'url': 'https://carter,porteranddelacruz.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'creative',
    'automation',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'thornton-plc',
  'name': 'Thornton PLC',
  'description': 'Sign draw place bed thought central meet rock career though end.',
  'category': 'presentations',
  'url': 'https://thorntonplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'search',
    'voice',
    'music',
    'image'
  ]
},
  {
  'id': 'baxter-grant',
  'name': 'Baxter-Grant',
  'description': 'Yourself discuss can process catch any describe have throughout.',
  'category': 'cooking',
  'url': 'https://baxter-grant.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'productivity',
    'video',
    'education',
    'search'
  ]
},
  {
  'id': 'bradshaw-group',
  'name': 'Bradshaw Group',
  'description': 'Character mouth community hair civil throw understand also test child those about.',
  'category': 'automation',
  'url': 'https://bradshawgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'data',
    'voice',
    'chatbot',
    'productivity'
  ]
},
  {
  'id': 'king-and-sons',
  'name': 'King and Sons',
  'description': 'Deal right item woman fast near.',
  'category': 'coding',
  'url': 'https://kingandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'video',
    'chatbot',
    'voice',
    'education'
  ]
},
  {
  'id': 'cannon-ltd',
  'name': 'Cannon Ltd',
  'description': 'Budget include how under low throw reveal style store across.',
  'category': 'chat',
  'url': 'https://cannonltd.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'workflow',
    'chatbot',
    'video',
    'voice'
  ]
},
  {
  'id': 'turner-smith',
  'name': 'Turner-Smith',
  'description': 'Money probably might national common rather purpose those imagine different particular author.',
  'category': 'video',
  'url': 'https://turner-smith.ai',
  'pricing': 'freemium',
  'keywords': [
    'voice',
    'data',
    'music',
    'ai',
    'workflow'
  ]
},
  {
  'id': 'campbell-washington',
  'name': 'Campbell-Washington',
  'description': 'Kitchen close such hundred situation agree simple idea claim rather human again.',
  'category': 'research',
  'url': 'https://campbell-washington.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'data',
    'chatbot',
    'music',
    'workflow'
  ]
},
  {
  'id': 'cross-group',
  'name': 'Cross Group',
  'description': 'Give network hear people newspaper film game teach south child reduce us early.',
  'category': 'web',
  'url': 'https://crossgroup.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'design',
    'image',
    'analysis',
    'voice'
  ]
},
  {
  'id': 'newman-inc',
  'name': 'Newman Inc',
  'description': 'Stay brother election animal reveal heavy color.',
  'category': 'presentations',
  'url': 'https://newmaninc.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'education',
    'automation',
    'image',
    'music'
  ]
},
  {
  'id': 'colon-patterson-and-campbell',
  'name': 'Colon, Patterson and Campbell',
  'description': 'Week hope he better president although perhaps.',
  'category': 'workflow',
  'url': 'https://colon,pattersonandcampbell.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'chatbot',
    'music',
    'voice',
    'creative'
  ]
},
  {
  'id': 'grant-group',
  'name': 'Grant Group',
  'description': 'Speak speech building admit travel quickly benefit Democrat between long investment nice act.',
  'category': 'customer',
  'url': 'https://grantgroup.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'data',
    'voice',
    'automation',
    'image'
  ]
},
  {
  'id': 'thomas-wright-and-dunn',
  'name': 'Thomas, Wright and Dunn',
  'description': 'Provide direction best back person item page hot girl speak huge then.',
  'category': 'coding',
  'url': 'https://thomas,wrightanddunn.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'recipe',
    'voice',
    'productivity',
    'design'
  ]
},
  {
  'id': 'ashley-plc',
  'name': 'Ashley PLC',
  'description': 'Right media organization such music use onto air risk teacher international interview.',
  'category': 'research',
  'url': 'https://ashleyplc.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'chatbot',
    'creative',
    'video',
    'recipe'
  ]
},
  {
  'id': 'sparks-group',
  'name': 'Sparks Group',
  'description': 'Medical challenge cost both commercial child policy.',
  'category': 'audio',
  'url': 'https://sparksgroup.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'voice',
    'creative',
    'productivity',
    'data'
  ]
},
  {
  'id': 'silva-sims-and-nunez',
  'name': 'Silva, Sims and Nunez',
  'description': 'Because operation will have adult player first receive age the century.',
  'category': 'automation',
  'url': 'https://silva,simsandnunez.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'music',
    'education',
    'creative',
    'design'
  ]
},
  {
  'id': 'johnson-inc',
  'name': 'Johnson Inc',
  'description': 'Drop common usually team attention enough.',
  'category': 'data',
  'url': 'https://johnsoninc.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'search',
    'image',
    'education',
    'automation'
  ]
},
  {
  'id': 'cain-long',
  'name': 'Cain-Long',
  'description': 'Military employee far hospital ground real cell degree.',
  'category': 'presentations',
  'url': 'https://cain-long.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'creative',
    'image',
    'search',
    'automation'
  ]
},
  {
  'id': 'reid-nolan-and-black',
  'name': 'Reid, Nolan and Black',
  'description': 'Mrs sell TV series behind act poor challenge.',
  'category': 'presentations',
  'url': 'https://reid,nolanandblack.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'music',
    'education',
    'recipe',
    'data'
  ]
},
  {
  'id': 'jones-snyder-and-delgado',
  'name': 'Jones, Snyder and Delgado',
  'description': 'Where low customer look himself hit bill write happen they.',
  'category': 'chat',
  'url': 'https://jones,snyderanddelgado.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'recipe',
    'design',
    'education',
    'music'
  ]
},
  {
  'id': 'moore-lee-and-mullins',
  'name': 'Moore, Lee and Mullins',
  'description': 'Send require across drive fact happen kitchen safe different magazine.',
  'category': 'coding',
  'url': 'https://moore,leeandmullins.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'education',
    'video',
    'image',
    'design'
  ]
},
  {
  'id': 'williamson-gill-and-reyes',
  'name': 'Williamson, Gill and Reyes',
  'description': 'But education debate term when cover white listen.',
  'category': 'web',
  'url': 'https://williamson,gillandreyes.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'voice',
    'education',
    'analysis',
    'video'
  ]
},
  {
  'id': 'phillips-duarte-and-johnson',
  'name': 'Phillips, Duarte and Johnson',
  'description': 'Issue difference explain contain way course agreement and stuff international boy prepare house.',
  'category': 'ideas',
  'url': 'https://phillips,duarteandjohnson.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'image',
    'music',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'fowler-group',
  'name': 'Fowler Group',
  'description': 'Local wear couple large fine gas think in Congress.',
  'category': 'learning',
  'url': 'https://fowlergroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'data',
    'music',
    'image',
    'workflow'
  ]
},
  {
  'id': 'cross-mcbride-and-rocha',
  'name': 'Cross, Mcbride and Rocha',
  'description': 'Grow girl live hotel spring cultural performance collection.',
  'category': 'data',
  'url': 'https://cross,mcbrideandrocha.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'search',
    'recipe',
    'analysis',
    'image'
  ]
},
  {
  'id': 'diaz-wagner-and-martinez',
  'name': 'Diaz, Wagner and Martinez',
  'description': 'Rise book poor alone amount site idea over seat attorney.',
  'category': 'customer',
  'url': 'https://diaz,wagnerandmartinez.ai',
  'pricing': 'paid',
  'keywords': [
    'image',
    'automation',
    'recipe',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'taylor-villanueva-and-watkins',
  'name': 'Taylor, Villanueva and Watkins',
  'description': 'Nation laugh moment him bar bag billion first director rather over.',
  'category': 'data',
  'url': 'https://taylor,villanuevaandwatkins.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'workflow',
    'voice',
    'ai',
    'music'
  ]
},
  {
  'id': 'hill-villanueva-and-foster',
  'name': 'Hill, Villanueva and Foster',
  'description': 'Treatment those real practice school someone source money real follow economic few save.',
  'category': 'web',
  'url': 'https://hill,villanuevaandfoster.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'education',
    'video',
    'music',
    'data'
  ]
},
  {
  'id': 'rodriguez-williams',
  'name': 'Rodriguez-Williams',
  'description': 'Church stuff else pay image check special really book campaign figure.',
  'category': 'coding',
  'url': 'https://rodriguez-williams.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'education',
    'image',
    'chatbot',
    'design'
  ]
},
  {
  'id': 'wright-plc',
  'name': 'Wright PLC',
  'description': 'Wear also appear modern detail year paper them wrong really cell speak.',
  'category': 'research',
  'url': 'https://wrightplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'chatbot',
    'music',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'gonzalez-herring',
  'name': 'Gonzalez-Herring',
  'description': 'Record response free college southern happy.',
  'category': 'cooking',
  'url': 'https://gonzalez-herring.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'music',
    'data',
    'productivity',
    'automation'
  ]
},
  {
  'id': 'smith-mclaughlin-and-rose',
  'name': 'Smith, Mclaughlin and Rose',
  'description': 'Kind model simple save term consider the southern beautiful.',
  'category': 'customer',
  'url': 'https://smith,mclaughlinandrose.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'voice',
    'image',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'leonard-duffy',
  'name': 'Leonard-Duffy',
  'description': 'Commercial senior news after from chair church member fast four.',
  'category': 'web',
  'url': 'https://leonard-duffy.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'recipe',
    'automation',
    'search',
    'voice'
  ]
},
  {
  'id': 'landry-wagner',
  'name': 'Landry-Wagner',
  'description': 'Soldier local ahead window benefit yourself common but along state person believe.',
  'category': 'creativity',
  'url': 'https://landry-wagner.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'automation',
    'music',
    'data',
    'education'
  ]
},
  {
  'id': 'patterson-clark',
  'name': 'Patterson-Clark',
  'description': 'Sure those popular ready American skill specific manager.',
  'category': 'productivity',
  'url': 'https://patterson-clark.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'voice',
    'search',
    'music',
    'data'
  ]
},
  {
  'id': 'williams-group',
  'name': 'Williams Group',
  'description': 'Technology decade mission next economic nice suggest act wide.',
  'category': 'customer',
  'url': 'https://williamsgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'workflow',
    'design',
    'ai',
    'music'
  ]
},
  {
  'id': 'lester-moore-and-kelley',
  'name': 'Lester, Moore and Kelley',
  'description': 'Teacher paper decide full also short above care chair policy guy far long.',
  'category': 'music',
  'url': 'https://lester,mooreandkelley.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'design',
    'creative',
    'video',
    'voice'
  ]
},
  {
  'id': 'ramirez-gordon',
  'name': 'Ramirez-Gordon',
  'description': 'End agreement unit drop into hand article.',
  'category': 'music',
  'url': 'https://ramirez-gordon.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'automation',
    'search',
    'voice',
    'design'
  ]
},
  {
  'id': 'gregory-young-and-tate',
  'name': 'Gregory, Young and Tate',
  'description': 'Yes step three thus check act drive machine include media factor agree.',
  'category': 'coding',
  'url': 'https://gregory,youngandtate.ai',
  'pricing': 'paid',
  'keywords': [
    'search',
    'music',
    'creative',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'clay-davenport',
  'name': 'Clay-Davenport',
  'description': 'No maybe also indeed close yet against big easy realize push early.',
  'category': 'ideas',
  'url': 'https://clay-davenport.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'recipe',
    'automation',
    'productivity',
    'video'
  ]
},
  {
  'id': 'smith-jones',
  'name': 'Smith-Jones',
  'description': 'Deep perhaps Mrs remember anyone maintain spend ok technology want.',
  'category': 'chat',
  'url': 'https://smith-jones.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'data',
    'design',
    'music',
    'creative'
  ]
},
  {
  'id': 'kelly-and-sons',
  'name': 'Kelly and Sons',
  'description': 'Ok agree nearly community feeling ago election body.',
  'category': 'ideas',
  'url': 'https://kellyandsons.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'automation',
    'workflow',
    'ai',
    'design'
  ]
},
  {
  'id': 'rogers-inc',
  'name': 'Rogers Inc',
  'description': 'Arrive even relate boy candidate color sound growth.',
  'category': 'presentations',
  'url': 'https://rogersinc.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'search',
    'workflow',
    'image',
    'analysis'
  ]
},
  {
  'id': 'robinson-jones',
  'name': 'Robinson-Jones',
  'description': 'Available as boy much throughout different data remain music ago benefit.',
  'category': 'creativity',
  'url': 'https://robinson-jones.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'workflow',
    'education',
    'video',
    'productivity'
  ]
},
  {
  'id': 'moore-inc',
  'name': 'Moore Inc',
  'description': 'Seek example local seek watch opportunity difficult should policy protect all reality forward.',
  'category': 'social',
  'url': 'https://mooreinc.ai',
  'pricing': 'subscription',
  'keywords': [
    'music',
    'recipe',
    'ai',
    'analysis',
    'video'
  ]
},
  {
  'id': 'burgess-williams-and-williams',
  'name': 'Burgess, Williams and Williams',
  'description': 'Tend story believe just sound when letter example large according force defense option.',
  'category': 'coding',
  'url': 'https://burgess,williamsandwilliams.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'image',
    'voice',
    'search',
    'design'
  ]
},
  {
  'id': 'sutton-llc',
  'name': 'Sutton LLC',
  'description': 'Mouth television least explain manager Republican control.',
  'category': 'creativity',
  'url': 'https://suttonllc.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'chatbot',
    'design',
    'creative',
    'search'
  ]
},
  {
  'id': 'villarreal-jackson-and-trevino',
  'name': 'Villarreal, Jackson and Trevino',
  'description': 'Artist nation many information physical section including exist pass special.',
  'category': 'workflow',
  'url': 'https://villarreal,jacksonandtrevino.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'design',
    'chatbot',
    'analysis',
    'creative'
  ]
},
  {
  'id': 'murphy-vasquez-and-park',
  'name': 'Murphy, Vasquez and Park',
  'description': 'Main build ability style player close fine food TV wish success machine goal.',
  'category': 'workflow',
  'url': 'https://murphy,vasquezandpark.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'analysis',
    'ai',
    'video',
    'music'
  ]
},
  {
  'id': 'smith-knapp-and-brock',
  'name': 'Smith, Knapp and Brock',
  'description': 'Safe particularly out individual from to.',
  'category': 'data',
  'url': 'https://smith,knappandbrock.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'chatbot',
    'design',
    'analysis',
    'video'
  ]
},
  {
  'id': 'bates-chapman',
  'name': 'Bates-Chapman',
  'description': 'Sound young end month poor laugh physical benefit hear early while form instead.',
  'category': 'audio',
  'url': 'https://bates-chapman.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'recipe',
    'productivity',
    'data',
    'chatbot'
  ]
},
  {
  'id': 'lewis-and-sons',
  'name': 'Lewis and Sons',
  'description': 'Look culture prove yeah around big imagine quality focus treatment follow lose.',
  'category': 'ideas',
  'url': 'https://lewisandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'education',
    'music',
    'recipe',
    'video'
  ]
},
  {
  'id': 'brown-collier-and-rodriguez',
  'name': 'Brown, Collier and Rodriguez',
  'description': 'Race see upon experience north blue they officer research but.',
  'category': 'automation',
  'url': 'https://brown,collierandrodriguez.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'image',
    'search',
    'data',
    'education'
  ]
},
  {
  'id': 'tran-plc',
  'name': 'Tran PLC',
  'description': 'Evening past identify me state music interesting top enough can practice claim.',
  'category': 'chat',
  'url': 'https://tranplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'search',
    'voice',
    'video',
    'chatbot',
    'analysis'
  ]
},
  {
  'id': 'avila-thompson-and-johnson',
  'name': 'Avila, Thompson and Johnson',
  'description': 'Ball eight girl together amount wind modern such stay father keep.',
  'category': 'music',
  'url': 'https://avila,thompsonandjohnson.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'ai',
    'productivity',
    'workflow',
    'design'
  ]
},
  {
  'id': 'diaz-llc',
  'name': 'Diaz LLC',
  'description': 'Occur first around woman range purpose on far develop most.',
  'category': 'automation',
  'url': 'https://diazllc.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'chatbot',
    'recipe',
    'music',
    'ai'
  ]
},
  {
  'id': 'dalton-martinez',
  'name': 'Dalton-Martinez',
  'description': 'Step the happen animal religious move reflect democratic poor they arrive truth sound.',
  'category': 'audio',
  'url': 'https://dalton-martinez.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'education',
    'search',
    'data',
    'music'
  ]
},
  {
  'id': 'greer-inc',
  'name': 'Greer Inc',
  'description': 'Forward deal accept its item among.',
  'category': 'customer',
  'url': 'https://greerinc.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'video',
    'design',
    'workflow',
    'education'
  ]
},
  {
  'id': 'gilbert-hunt-and-green',
  'name': 'Gilbert, Hunt and Green',
  'description': 'No difficult military knowledge amount spend doctor girl church drug lead home choose.',
  'category': 'customer',
  'url': 'https://gilbert,huntandgreen.ai',
  'pricing': 'subscription',
  'keywords': [
    'recipe',
    'music',
    'creative',
    'chatbot',
    'automation'
  ]
},
  {
  'id': 'austin-inc',
  'name': 'Austin Inc',
  'description': 'Suddenly follow song until property involve appear fact ball cost.',
  'category': 'writing',
  'url': 'https://austininc.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'education',
    'voice',
    'design',
    'creative'
  ]
},
  {
  'id': 'barber-blake',
  'name': 'Barber-Blake',
  'description': 'Three avoid serious talk professional design room risk.',
  'category': 'cooking',
  'url': 'https://barber-blake.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'creative',
    'analysis',
    'productivity',
    'search'
  ]
},
  {
  'id': 'carter-armstrong-and-morgan',
  'name': 'Carter, Armstrong and Morgan',
  'description': 'He commercial her economic mouth single long along beyond new customer thank return.',
  'category': 'data',
  'url': 'https://carter,armstrongandmorgan.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'ai',
    'recipe',
    'voice',
    'design'
  ]
},
  {
  'id': 'reid-jones-and-espinoza',
  'name': 'Reid, Jones and Espinoza',
  'description': 'Leg say fear theory choose beat certainly national day face behavior.',
  'category': 'design',
  'url': 'https://reid,jonesandespinoza.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'productivity',
    'creative',
    'chatbot',
    'music'
  ]
},
  {
  'id': 'roberts-williams',
  'name': 'Roberts-Williams',
  'description': 'He season wear move thank almost science everything.',
  'category': 'web',
  'url': 'https://roberts-williams.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'workflow',
    'data',
    'image',
    'productivity'
  ]
},
  {
  'id': 'jimenez-rodriguez-and-perez',
  'name': 'Jimenez, Rodriguez and Perez',
  'description': 'Middle here south face especially process research measure value game sit.',
  'category': 'presentations',
  'url': 'https://jimenez,rodriguezandperez.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'automation',
    'music',
    'analysis',
    'workflow'
  ]
},
  {
  'id': 'stewart-williams',
  'name': 'Stewart-Williams',
  'description': 'Word name husband miss without black court bank argue development reason.',
  'category': 'automation',
  'url': 'https://stewart-williams.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'recipe',
    'automation',
    'chatbot',
    'search'
  ]
},
  {
  'id': 'savage-butler',
  'name': 'Savage-Butler',
  'description': 'Mention else ok general just goal on reflect letter.',
  'category': 'learning',
  'url': 'https://savage-butler.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'creative',
    'data',
    'design',
    'education'
  ]
},
  {
  'id': 'vazquez-wilson-and-mccoy',
  'name': 'Vazquez, Wilson and Mccoy',
  'description': 'Since film understand season country alone professor again oil make.',
  'category': 'writing',
  'url': 'https://vazquez,wilsonandmccoy.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'creative',
    'chatbot',
    'education',
    'workflow'
  ]
},
  {
  'id': 'brewer-plc',
  'name': 'Brewer PLC',
  'description': 'Laugh some campaign small much actually simple all off kid travel although.',
  'category': 'image',
  'url': 'https://brewerplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'creative',
    'productivity',
    'image',
    'data'
  ]
},
  {
  'id': 'johnson-eaton',
  'name': 'Johnson-Eaton',
  'description': 'Assume turn manage technology exist Democrat.',
  'category': 'data',
  'url': 'https://johnson-eaton.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'analysis',
    'creative',
    'recipe',
    'music'
  ]
},
  {
  'id': 'taylor-and-sons',
  'name': 'Taylor and Sons',
  'description': 'Plan black plan morning anything near force finish four day buy.',
  'category': 'music',
  'url': 'https://taylorandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'design',
    'image',
    'ai',
    'search'
  ]
},
  {
  'id': 'singh-group',
  'name': 'Singh Group',
  'description': 'Cell wait visit stand drug quite establish even civil garden movie.',
  'category': 'audio',
  'url': 'https://singhgroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'chatbot',
    'design',
    'image',
    'ai'
  ]
},
  {
  'id': 'sanchez-and-sons',
  'name': 'Sanchez and Sons',
  'description': 'Vote white west morning as player change identify thank people fine.',
  'category': 'search',
  'url': 'https://sanchezandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'workflow',
    'analysis',
    'data',
    'video'
  ]
},
  {
  'id': 'bridges-cruz-and-werner',
  'name': 'Bridges, Cruz and Werner',
  'description': 'Seat sit red expert project degree statement enter around staff million.',
  'category': 'audio',
  'url': 'https://bridges,cruzandwerner.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'productivity',
    'search',
    'image',
    'voice'
  ]
},
  {
  'id': 'bennett-davis-and-young',
  'name': 'Bennett, Davis and Young',
  'description': 'Agency agree what tend throughout as peace candidate lose speak trial of short.',
  'category': 'cooking',
  'url': 'https://bennett,davisandyoung.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'creative',
    'video',
    'music',
    'productivity'
  ]
},
  {
  'id': 'torres-inc',
  'name': 'Torres Inc',
  'description': 'Suggest ground unit up civil white spring carry school worry hotel leader.',
  'category': 'web',
  'url': 'https://torresinc.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'creative',
    'recipe',
    'voice',
    'chatbot'
  ]
},
  {
  'id': 'garza-brooks',
  'name': 'Garza-Brooks',
  'description': 'Phone day hotel scientist change be population candidate interest son town.',
  'category': 'design',
  'url': 'https://garza-brooks.ai',
  'pricing': 'free',
  'keywords': [
    'creative',
    'ai',
    'music',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'hicks-ellis-and-sherman',
  'name': 'Hicks, Ellis and Sherman',
  'description': 'Share gas technology employee next reveal source color close else member help.',
  'category': 'learning',
  'url': 'https://hicks,ellisandsherman.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'creative',
    'ai',
    'design',
    'productivity'
  ]
},
  {
  'id': 'conley-pena',
  'name': 'Conley-Pena',
  'description': 'Small respond successful news fact again before hold send.',
  'category': 'image',
  'url': 'https://conley-pena.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'chatbot',
    'automation',
    'video',
    'workflow'
  ]
},
  {
  'id': 'gilmore-todd',
  'name': 'Gilmore-Todd',
  'description': 'Hour image feel fight forward suffer edge call opportunity various though option.',
  'category': 'creativity',
  'url': 'https://gilmore-todd.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'education',
    'data',
    'voice',
    'video'
  ]
},
  {
  'id': 'fields-patton',
  'name': 'Fields-Patton',
  'description': 'Number possible institution center see arm.',
  'category': 'search',
  'url': 'https://fields-patton.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'design',
    'creative',
    'automation',
    'productivity'
  ]
},
  {
  'id': 'thomas-plc',
  'name': 'Thomas PLC',
  'description': 'Computer capital foreign education tax happy bad truth nation.',
  'category': 'video',
  'url': 'https://thomasplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'productivity',
    'voice',
    'ai',
    'automation'
  ]
},
  {
  'id': 'morris-jackson-and-peterson',
  'name': 'Morris, Jackson and Peterson',
  'description': 'Art seven cell sort boy whom green material everybody.',
  'category': 'data',
  'url': 'https://morris,jacksonandpeterson.ai',
  'pricing': 'paid',
  'keywords': [
    'analysis',
    'design',
    'automation',
    'image',
    'productivity'
  ]
},
  {
  'id': 'larson-and-sons',
  'name': 'Larson and Sons',
  'description': 'Civil page human simple oil religious suggest continue.',
  'category': 'social',
  'url': 'https://larsonandsons.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'search',
    'productivity',
    'design',
    'ai'
  ]
},
  {
  'id': 'sanchez-farmer-and-smith',
  'name': 'Sanchez, Farmer and Smith',
  'description': 'Town method another energy player perform material military indicate year any our guess.',
  'category': 'data',
  'url': 'https://sanchez,farmerandsmith.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'video',
    'analysis',
    'data',
    'ai'
  ]
},
  {
  'id': 'edwards-ltd',
  'name': 'Edwards Ltd',
  'description': 'Become garden floor ball thank child protect put once culture.',
  'category': 'design',
  'url': 'https://edwardsltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'analysis',
    'video',
    'voice',
    'design'
  ]
},
  {
  'id': 'carrillo-edwards-and-taylor',
  'name': 'Carrillo, Edwards and Taylor',
  'description': 'Speak and must might pay allow gas garden available.',
  'category': 'writing',
  'url': 'https://carrillo,edwardsandtaylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'design',
    'image',
    'data',
    'recipe'
  ]
},
  {
  'id': 'white-collins-and-rowe',
  'name': 'White, Collins and Rowe',
  'description': 'Anything art week cultural police manage attack road candidate writer.',
  'category': 'data',
  'url': 'https://white,collinsandrowe.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'workflow',
    'ai',
    'voice',
    'analysis'
  ]
},
  {
  'id': 'long-robinson',
  'name': 'Long-Robinson',
  'description': 'Fact always newspaper able teach price senior attention summer it safe position.',
  'category': 'coding',
  'url': 'https://long-robinson.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'education',
    'search',
    'data',
    'image'
  ]
},
  {
  'id': 'allen-anderson-and-gallagher',
  'name': 'Allen, Anderson and Gallagher',
  'description': 'Role nature all responsibility toward build late.',
  'category': 'productivity',
  'url': 'https://allen,andersonandgallagher.ai',
  'pricing': 'paid',
  'keywords': [
    'music',
    'automation',
    'ai',
    'recipe',
    'productivity'
  ]
},
  {
  'id': 'washington-hall',
  'name': 'Washington-Hall',
  'description': 'Walk great after key real apply structure why phone member just full pull.',
  'category': 'ideas',
  'url': 'https://washington-hall.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'analysis',
    'voice',
    'data',
    'image'
  ]
},
  {
  'id': 'johnson-jones-and-miller',
  'name': 'Johnson, Jones and Miller',
  'description': 'Me game nearly under machine power fire.',
  'category': 'workflow',
  'url': 'https://johnson,jonesandmiller.ai',
  'pricing': 'freemium',
  'keywords': [
    'chatbot',
    'voice',
    'education',
    'productivity',
    'creative'
  ]
},
  {
  'id': 'steele-campbell-and-bush',
  'name': 'Steele, Campbell and Bush',
  'description': 'Charge catch simply hold per but.',
  'category': 'coding',
  'url': 'https://steele,campbellandbush.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'search',
    'music',
    'ai',
    'analysis'
  ]
},
  {
  'id': 'dominguez-inc',
  'name': 'Dominguez Inc',
  'description': 'Finish address participant among report grow teacher lawyer group level life idea with.',
  'category': 'music',
  'url': 'https://dominguezinc.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'chatbot',
    'music',
    'voice',
    'design'
  ]
},
  {
  'id': 'riddle-plc',
  'name': 'Riddle PLC',
  'description': 'Compare blood hot evening such history drop class different.',
  'category': 'automation',
  'url': 'https://riddleplc.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'recipe',
    'voice',
    'productivity',
    'video'
  ]
},
  {
  'id': 'bailey-ltd',
  'name': 'Bailey Ltd',
  'description': 'Public according direction go full field parent generation art along food seven way.',
  'category': 'creativity',
  'url': 'https://baileyltd.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'data',
    'creative',
    'search',
    'ai'
  ]
},
  {
  'id': 'taylor-green',
  'name': 'Taylor-Green',
  'description': 'Enough play mission consider never free rather important.',
  'category': 'writing',
  'url': 'https://taylor-green.ai',
  'pricing': 'subscription',
  'keywords': [
    'analysis',
    'chatbot',
    'music',
    'automation',
    'recipe'
  ]
},
  {
  'id': 'sanchez-donovan',
  'name': 'Sanchez-Donovan',
  'description': 'Network know local artist available born five remember they.',
  'category': 'creativity',
  'url': 'https://sanchez-donovan.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'workflow',
    'ai',
    'data',
    'video'
  ]
},
  {
  'id': 'holmes-padilla',
  'name': 'Holmes-Padilla',
  'description': 'Such down maintain fear need box research hotel experience nearly I art.',
  'category': 'coding',
  'url': 'https://holmes-padilla.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'ai',
    'design',
    'education',
    'productivity'
  ]
},
  {
  'id': 'french-wilson',
  'name': 'French-Wilson',
  'description': 'Seem on describe admit west as memory decade statement common whatever dark inside.',
  'category': 'image',
  'url': 'https://french-wilson.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'automation',
    'creative',
    'chatbot',
    'image'
  ]
},
  {
  'id': 'camacho-galloway',
  'name': 'Camacho-Galloway',
  'description': 'Significant hear break send reduce board both travel prevent us piece central story.',
  'category': 'social',
  'url': 'https://camacho-galloway.ai',
  'pricing': 'paid',
  'keywords': [
    'video',
    'analysis',
    'productivity',
    'recipe',
    'creative'
  ]
},
  {
  'id': 'berg-strickland',
  'name': 'Berg-Strickland',
  'description': 'Happen daughter wife develop choose anyone street arm later when too.',
  'category': 'audio',
  'url': 'https://berg-strickland.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'video',
    'education',
    'data',
    'creative'
  ]
},
  {
  'id': 'buckley-plc',
  'name': 'Buckley PLC',
  'description': 'Six fast child image make now fast sure suffer purpose campaign sense.',
  'category': 'coding',
  'url': 'https://buckleyplc.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'image',
    'music',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'maxwell-miller',
  'name': 'Maxwell-Miller',
  'description': 'Direction month strategy break successful risk.',
  'category': 'cooking',
  'url': 'https://maxwell-miller.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'productivity',
    'creative',
    'image',
    'ai'
  ]
},
  {
  'id': 'fletcher-kim-and-massey',
  'name': 'Fletcher, Kim and Massey',
  'description': 'Risk shoulder person entire my crime of question heavy work owner.',
  'category': 'design',
  'url': 'https://fletcher,kimandmassey.ai',
  'pricing': 'free',
  'keywords': [
    'data',
    'voice',
    'automation',
    'productivity',
    'video'
  ]
},
  {
  'id': 'jones-jones-and-rosario',
  'name': 'Jones, Jones and Rosario',
  'description': 'Explain contain team foot so lose grow environmental hair watch charge this in.',
  'category': 'productivity',
  'url': 'https://jones,jonesandrosario.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'education',
    'workflow',
    'analysis',
    'automation'
  ]
},
  {
  'id': 'knapp-perez',
  'name': 'Knapp-Perez',
  'description': 'Why occur air identify experience a but but open.',
  'category': 'creativity',
  'url': 'https://knapp-perez.ai',
  'pricing': 'free',
  'keywords': [
    'ai',
    'voice',
    'video',
    'recipe',
    'data'
  ]
},
  {
  'id': 'copeland-morales',
  'name': 'Copeland-Morales',
  'description': 'Task space become boy class important consider care put various join risk.',
  'category': 'video',
  'url': 'https://copeland-morales.ai',
  'pricing': 'subscription',
  'keywords': [
    'creative',
    'recipe',
    'video',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'johnston-gray-and-horton',
  'name': 'Johnston, Gray and Horton',
  'description': 'True site hair throw easy issue involve perhaps those far success political.',
  'category': 'creativity',
  'url': 'https://johnston,grayandhorton.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'image',
    'analysis',
    'chatbot',
    'data'
  ]
},
  {
  'id': 'harvey-hamilton',
  'name': 'Harvey-Hamilton',
  'description': 'Build group hundred worry station knowledge admit my particularly free reflect land.',
  'category': 'music',
  'url': 'https://harvey-hamilton.ai',
  'pricing': 'paid',
  'keywords': [
    'recipe',
    'ai',
    'workflow',
    'automation',
    'creative'
  ]
},
  {
  'id': 'smith-wallace-and-joseph',
  'name': 'Smith, Wallace and Joseph',
  'description': 'Week oil program reveal question use nothing behavior shake allow suddenly lay feeling.',
  'category': 'automation',
  'url': 'https://smith,wallaceandjoseph.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'design',
    'data',
    'voice',
    'automation'
  ]
},
  {
  'id': 'barnes-nguyen',
  'name': 'Barnes-Nguyen',
  'description': 'Way simply newspaper pick statement draw town.',
  'category': 'customer',
  'url': 'https://barnes-nguyen.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'voice',
    'music',
    'workflow',
    'productivity'
  ]
},
  {
  'id': 'mckinney-and-sons',
  'name': 'Mckinney and Sons',
  'description': 'Cover suffer nation necessary may western pass best find seek information test political.',
  'category': 'video',
  'url': 'https://mckinneyandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'automation',
    'voice',
    'search',
    'productivity'
  ]
},
  {
  'id': 'bishop-haynes',
  'name': 'Bishop-Haynes',
  'description': 'Suddenly modern onto thing partner election human like fight site garden.',
  'category': 'search',
  'url': 'https://bishop-haynes.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'creative',
    'design',
    'productivity',
    'search'
  ]
},
  {
  'id': 'spears-king-and-young',
  'name': 'Spears, King and Young',
  'description': 'South community machine case security occur any wish here able song identify.',
  'category': 'music',
  'url': 'https://spears,kingandyoung.ai',
  'pricing': 'free',
  'keywords': [
    'productivity',
    'chatbot',
    'voice',
    'design',
    'image'
  ]
},
  {
  'id': 'lee-nelson-and-garcia',
  'name': 'Lee, Nelson and Garcia',
  'description': 'Draw send improve sense wait indeed couple certain offer he report clear.',
  'category': 'social',
  'url': 'https://lee,nelsonandgarcia.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'search',
    'automation',
    'creative',
    'workflow'
  ]
},
  {
  'id': 'hill-group',
  'name': 'Hill Group',
  'description': 'Everyone include local miss property hard answer indicate American city.',
  'category': 'presentations',
  'url': 'https://hillgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'chatbot',
    'workflow',
    'video',
    'design'
  ]
},
  {
  'id': 'taylor-beck-and-white',
  'name': 'Taylor, Beck and White',
  'description': 'Usually population dream author four compare information source might simple catch mind develop.',
  'category': 'video',
  'url': 'https://taylor,beckandwhite.ai',
  'pricing': 'paid',
  'keywords': [
    'design',
    'ai',
    'workflow',
    'analysis',
    'recipe'
  ]
},
  {
  'id': 'faulkner-ho-and-sanchez',
  'name': 'Faulkner, Ho and Sanchez',
  'description': 'Arm the wonder church treat range another building policy it impact significant heavy.',
  'category': 'search',
  'url': 'https://faulkner,hoandsanchez.ai',
  'pricing': 'free',
  'keywords': [
    'recipe',
    'video',
    'ai',
    'chatbot',
    'voice'
  ]
},
  {
  'id': 'white-oconnell',
  'name': 'White-Oconnell',
  'description': 'Leader hit guy arm expert capital my whole view window skin.',
  'category': 'design',
  'url': 'https://white-oconnell.ai',
  'pricing': 'freemium',
  'keywords': [
    'automation',
    'search',
    'image',
    'data',
    'recipe'
  ]
},
  {
  'id': 'ho-and-sons',
  'name': 'Ho and Sons',
  'description': 'Age while just force sea think science.',
  'category': 'research',
  'url': 'https://hoandsons.ai',
  'pricing': 'paid',
  'keywords': [
    'education',
    'data',
    'recipe',
    'productivity',
    'image'
  ]
},
  {
  'id': 'kaufman-baxter',
  'name': 'Kaufman-Baxter',
  'description': 'Forget in student message water company put painting.',
  'category': 'productivity',
  'url': 'https://kaufman-baxter.ai',
  'pricing': 'paid',
  'keywords': [
    'automation',
    'video',
    'workflow',
    'search',
    'education'
  ]
},
  {
  'id': 'sanders-taylor',
  'name': 'Sanders-Taylor',
  'description': 'Woman spring surface political matter gun.',
  'category': 'image',
  'url': 'https://sanders-taylor.ai',
  'pricing': 'subscription',
  'keywords': [
    'search',
    'automation',
    'recipe',
    'analysis',
    'video'
  ]
},
  {
  'id': 'walton-inc',
  'name': 'Walton Inc',
  'description': 'Tough purpose perhaps social serious inside bill.',
  'category': 'audio',
  'url': 'https://waltoninc.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'ai',
    'design',
    'voice',
    'automation'
  ]
},
  {
  'id': 'johnson-yu-and-strickland',
  'name': 'Johnson, Yu and Strickland',
  'description': 'Girl now sport amount either remember.',
  'category': 'learning',
  'url': 'https://johnson,yuandstrickland.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'search',
    'automation',
    'design',
    'productivity'
  ]
},
  {
  'id': 'landry-adkins-and-kidd',
  'name': 'Landry, Adkins and Kidd',
  'description': 'Choice always manage place think blood.',
  'category': 'social',
  'url': 'https://landry,adkinsandkidd.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'automation',
    'music',
    'search',
    'chatbot'
  ]
},
  {
  'id': 'martin-peterson',
  'name': 'Martin-Peterson',
  'description': 'Suggest develop rule thus particular value new her those high while blue.',
  'category': 'chat',
  'url': 'https://martin-peterson.ai',
  'pricing': 'subscription',
  'keywords': [
    'image',
    'design',
    'chatbot',
    'ai',
    'voice'
  ]
},
  {
  'id': 'turner-washington',
  'name': 'Turner-Washington',
  'description': 'Serious practice teach like sound huge.',
  'category': 'workflow',
  'url': 'https://turner-washington.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'design',
    'search',
    'analysis',
    'voice'
  ]
},
  {
  'id': 'hansen-inc',
  'name': 'Hansen Inc',
  'description': 'Individual pick could bring weight moment campaign continue.',
  'category': 'data',
  'url': 'https://hanseninc.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'creative',
    'design',
    'voice',
    'education'
  ]
},
  {
  'id': 'berger-plc',
  'name': 'Berger PLC',
  'description': 'Social town it customer enough trip daughter medical on student dog cup road son.',
  'category': 'social',
  'url': 'https://bergerplc.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'voice',
    'analysis',
    'image',
    'creative'
  ]
},
  {
  'id': 'hines-diaz',
  'name': 'Hines-Diaz',
  'description': 'View attack party put out step second.',
  'category': 'ideas',
  'url': 'https://hines-diaz.ai',
  'pricing': 'paid',
  'keywords': [
    'workflow',
    'image',
    'voice',
    'chatbot',
    'creative'
  ]
},
  {
  'id': 'arias-lambert',
  'name': 'Arias-Lambert',
  'description': 'Across great sound green fly industry Democrat moment affect rate despite cut your.',
  'category': 'image',
  'url': 'https://arias-lambert.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'creative',
    'search',
    'productivity',
    'music'
  ]
},
  {
  'id': 'houston-davis',
  'name': 'Houston-Davis',
  'description': 'Idea identify music same piece clear to number face.',
  'category': 'workflow',
  'url': 'https://houston-davis.ai',
  'pricing': 'free',
  'keywords': [
    'analysis',
    'design',
    'music',
    'ai',
    'search'
  ]
},
  {
  'id': 'joseph-smith-and-bush',
  'name': 'Joseph, Smith and Bush',
  'description': 'Civil resource send particularly car remember.',
  'category': 'workflow',
  'url': 'https://joseph,smithandbush.ai',
  'pricing': 'freemium',
  'keywords': [
    'ai',
    'video',
    'design',
    'chatbot',
    'education'
  ]
},
  {
  'id': 'coleman-moore',
  'name': 'Coleman-Moore',
  'description': 'Trouble half situation senior run politics her resource difficult.',
  'category': 'automation',
  'url': 'https://coleman-moore.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'video',
    'chatbot',
    'data',
    'recipe'
  ]
},
  {
  'id': 'allen-cole',
  'name': 'Allen-Cole',
  'description': 'Feeling rock base wife evidence glass move week six whose cause relationship.',
  'category': 'customer',
  'url': 'https://allen-cole.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'data',
    'music',
    'design',
    'productivity'
  ]
},
  {
  'id': 'sanchez-trevino',
  'name': 'Sanchez-Trevino',
  'description': 'Position and adult social student meeting night ball company.',
  'category': 'ideas',
  'url': 'https://sanchez-trevino.ai',
  'pricing': 'paid',
  'keywords': [
    'chatbot',
    'video',
    'education',
    'analysis',
    'search'
  ]
},
  {
  'id': 'farrell-boyd',
  'name': 'Farrell-Boyd',
  'description': 'Enough itself present health attention recognize plant analysis provide eat nation.',
  'category': 'web',
  'url': 'https://farrell-boyd.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'data',
    'automation',
    'voice',
    'design'
  ]
},
  {
  'id': 'stanley-hamilton-and-wall',
  'name': 'Stanley, Hamilton and Wall',
  'description': 'Politics sing artist remember determine trip food consumer charge defense art structure.',
  'category': 'presentations',
  'url': 'https://stanley,hamiltonandwall.ai',
  'pricing': 'subscription',
  'keywords': [
    'ai',
    'voice',
    'education',
    'automation',
    'analysis'
  ]
},
  {
  'id': 'stanley-robinson',
  'name': 'Stanley-Robinson',
  'description': 'Collection page one day father truth cup hundred specific staff purpose choice measure.',
  'category': 'music',
  'url': 'https://stanley-robinson.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'workflow',
    'education',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'huffman-lee-and-price',
  'name': 'Huffman, Lee and Price',
  'description': 'Feel before tell let piece there heavy offer reality accept.',
  'category': 'ideas',
  'url': 'https://huffman,leeandprice.ai',
  'pricing': 'subscription',
  'keywords': [
    'automation',
    'image',
    'design',
    'workflow',
    'search'
  ]
},
  {
  'id': 'cox-howard',
  'name': 'Cox-Howard',
  'description': 'Push yet allow pattern contain scientist easy back PM art you movement meet.',
  'category': 'productivity',
  'url': 'https://cox-howard.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'data',
    'search',
    'creative',
    'analysis'
  ]
},
  {
  'id': 'berry-gould-and-reeves',
  'name': 'Berry, Gould and Reeves',
  'description': 'Along while wish level society lawyer front address soon leg people.',
  'category': 'search',
  'url': 'https://berry,gouldandreeves.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'video',
    'data',
    'voice',
    'productivity'
  ]
},
  {
  'id': 'marshall-owens',
  'name': 'Marshall-Owens',
  'description': 'Television board range thousand concern through partner particularly prove current lawyer.',
  'category': 'audio',
  'url': 'https://marshall-owens.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'design',
    'workflow',
    'video',
    'recipe'
  ]
},
  {
  'id': 'cruz-joyce-and-bautista',
  'name': 'Cruz, Joyce and Bautista',
  'description': 'Floor thank month must prepare white road reduce shoulder but.',
  'category': 'automation',
  'url': 'https://cruz,joyceandbautista.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'voice',
    'chatbot',
    'analysis',
    'recipe'
  ]
},
  {
  'id': 'clark-vance-and-moore',
  'name': 'Clark, Vance and Moore',
  'description': 'Six consider hospital without contain each health ability able top brother oil.',
  'category': 'cooking',
  'url': 'https://clark,vanceandmoore.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'recipe',
    'automation',
    'ai',
    'data'
  ]
},
  {
  'id': 'wells-moore-and-smith',
  'name': 'Wells, Moore and Smith',
  'description': 'Always research foreign stop without land hot check.',
  'category': 'music',
  'url': 'https://wells,mooreandsmith.ai',
  'pricing': 'paid',
  'keywords': [
    'data',
    'creative',
    'search',
    'design',
    'analysis'
  ]
},
  {
  'id': 'randolph-allen-and-gordon',
  'name': 'Randolph, Allen and Gordon',
  'description': 'Treat modern thus customer add trouble bit book property.',
  'category': 'coding',
  'url': 'https://randolph,allenandgordon.ai',
  'pricing': 'subscription',
  'keywords': [
    'video',
    'creative',
    'workflow',
    'music',
    'image'
  ]
},
  {
  'id': 'cortez-fox-and-mcdonald',
  'name': 'Cortez, Fox and Mcdonald',
  'description': 'Seek put free card ability fight people easy close.',
  'category': 'video',
  'url': 'https://cortez,foxandmcdonald.ai',
  'pricing': 'free',
  'keywords': [
    'workflow',
    'video',
    'analysis',
    'design',
    'recipe'
  ]
},
  {
  'id': 'hogan-group',
  'name': 'Hogan Group',
  'description': 'Stay bed democratic generation call analysis prove song major race.',
  'category': 'music',
  'url': 'https://hogangroup.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'music',
    'chatbot',
    'voice',
    'analysis'
  ]
},
  {
  'id': 'hill-trujillo',
  'name': 'Hill-Trujillo',
  'description': 'Check what magazine collection which name choose can much discover start your remember.',
  'category': 'productivity',
  'url': 'https://hill-trujillo.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'chatbot',
    'workflow',
    'analysis',
    'recipe'
  ]
},
  {
  'id': 'johns-harris',
  'name': 'Johns-Harris',
  'description': 'Control describe Mrs commercial really federal natural marriage success.',
  'category': 'automation',
  'url': 'https://johns-harris.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'music',
    'workflow',
    'design',
    'education'
  ]
},
  {
  'id': 'garrett-inc',
  'name': 'Garrett Inc',
  'description': 'Behavior two town federal store air various various.',
  'category': 'research',
  'url': 'https://garrettinc.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'automation',
    'analysis',
    'search',
    'creative'
  ]
},
  {
  'id': 'terry-sutton-and-lewis',
  'name': 'Terry, Sutton and Lewis',
  'description': 'Tell establish cost course that happy.',
  'category': 'ideas',
  'url': 'https://terry,suttonandlewis.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'voice',
    'recipe',
    'education',
    'ai'
  ]
},
  {
  'id': 'davis-oconnor',
  'name': 'Davis-Oconnor',
  'description': 'Other serious play heavy possible turn policy.',
  'category': 'music',
  'url': 'https://davis-oconnor.ai',
  'pricing': 'free',
  'keywords': [
    'voice',
    'productivity',
    'education',
    'design',
    'image'
  ]
},
  {
  'id': 'landry-cox-and-silva',
  'name': 'Landry, Cox and Silva',
  'description': 'Reveal soldier within have its development subject glass around.',
  'category': 'learning',
  'url': 'https://landry,coxandsilva.ai',
  'pricing': 'freemium',
  'keywords': [
    'data',
    'design',
    'music',
    'analysis',
    'ai'
  ]
},
  {
  'id': 'franklin-rodriguez-and-lewis',
  'name': 'Franklin, Rodriguez and Lewis',
  'description': 'Language summer letter alone whose success main role radio energy degree budget.',
  'category': 'audio',
  'url': 'https://franklin,rodriguezandlewis.ai',
  'pricing': 'freemium',
  'keywords': [
    'workflow',
    'analysis',
    'image',
    'data',
    'voice'
  ]
},
  {
  'id': 'perez-johnston-and-marshall',
  'name': 'Perez, Johnston and Marshall',
  'description': 'Road decision vote environmental much risk professional thing occur political.',
  'category': 'writing',
  'url': 'https://perez,johnstonandmarshall.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'analysis',
    'image',
    'design',
    'chatbot'
  ]
},
  {
  'id': 'coleman-baker',
  'name': 'Coleman-Baker',
  'description': 'Short month answer treat food lay always light support.',
  'category': 'cooking',
  'url': 'https://coleman-baker.ai',
  'pricing': 'free',
  'keywords': [
    'search',
    'creative',
    'ai',
    'productivity',
    'chatbot'
  ]
},
  {
  'id': 'ellis-wright',
  'name': 'Ellis-Wright',
  'description': 'Health base blue happen huge seat camera.',
  'category': 'productivity',
  'url': 'https://ellis-wright.ai',
  'pricing': 'freemium',
  'keywords': [
    'analysis',
    'recipe',
    'chatbot',
    'ai',
    'data'
  ]
},
  {
  'id': 'sanders-hall',
  'name': 'Sanders-Hall',
  'description': 'Behavior begin development end reach find pick head seat keep research then.',
  'category': 'chat',
  'url': 'https://sanders-hall.ai',
  'pricing': 'freemium',
  'keywords': [
    'creative',
    'chatbot',
    'design',
    'search',
    'productivity'
  ]
},
  {
  'id': 'gallegos-santos-and-white',
  'name': 'Gallegos, Santos and White',
  'description': 'Somebody drug political change finish special law one try gas brother head.',
  'category': 'writing',
  'url': 'https://gallegos,santosandwhite.ai',
  'pricing': 'free',
  'keywords': [
    'automation',
    'education',
    'ai',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'landry-plc',
  'name': 'Landry PLC',
  'description': 'Big base cell almost security during training heart international business anyone sit particularly.',
  'category': 'writing',
  'url': 'https://landryplc.ai',
  'pricing': 'subscription',
  'keywords': [
    'design',
    'music',
    'analysis',
    'productivity',
    'voice'
  ]
},
  {
  'id': 'mathews-anderson-and-young',
  'name': 'Mathews, Anderson and Young',
  'description': 'A kitchen reflect nor require fact.',
  'category': 'automation',
  'url': 'https://mathews,andersonandyoung.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'creative',
    'automation',
    'design',
    'data'
  ]
},
  {
  'id': 'garcia-scott-and-lang',
  'name': 'Garcia, Scott and Lang',
  'description': 'Space hot religious population store group today.',
  'category': 'writing',
  'url': 'https://garcia,scottandlang.ai',
  'pricing': 'free',
  'keywords': [
    'design',
    'productivity',
    'search',
    'image',
    'workflow'
  ]
},
  {
  'id': 'decker-griffin-and-young',
  'name': 'Decker, Griffin and Young',
  'description': 'Car its dinner at under same.',
  'category': 'data',
  'url': 'https://decker,griffinandyoung.ai',
  'pricing': 'paid',
  'keywords': [
    'productivity',
    'workflow',
    'education',
    'design',
    'music'
  ]
},
  {
  'id': 'brooks-llc',
  'name': 'Brooks LLC',
  'description': 'Idea film beyond above discover argue star kid.',
  'category': 'search',
  'url': 'https://brooksllc.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'music',
    'automation',
    'creative',
    'ai'
  ]
},
  {
  'id': 'george-davis',
  'name': 'George-Davis',
  'description': 'Resource matter stock stage foreign direction tonight reality.',
  'category': 'search',
  'url': 'https://george-davis.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'video',
    'education',
    'analysis',
    'chatbot'
  ]
},
  {
  'id': 'todd-miles',
  'name': 'Todd-Miles',
  'description': 'Box ago stand who country region.',
  'category': 'writing',
  'url': 'https://todd-miles.ai',
  'pricing': 'paid',
  'keywords': [
    'creative',
    'chatbot',
    'workflow',
    'education',
    'ai'
  ]
},
  {
  'id': 'hayes-moore-and-mccarthy',
  'name': 'Hayes, Moore and Mccarthy',
  'description': 'Forward range same ability course religious.',
  'category': 'cooking',
  'url': 'https://hayes,mooreandmccarthy.ai',
  'pricing': 'paid',
  'keywords': [
    'voice',
    'productivity',
    'search',
    'creative',
    'data'
  ]
},
  {
  'id': 'hicks-and-sons',
  'name': 'Hicks and Sons',
  'description': 'Heart matter church south thank my training player piece guess hit career.',
  'category': 'audio',
  'url': 'https://hicksandsons.ai',
  'pricing': 'subscription',
  'keywords': [
    'education',
    'productivity',
    'recipe',
    'video',
    'design'
  ]
},
  {
  'id': 'lopez-king',
  'name': 'Lopez-King',
  'description': 'Behavior figure process case box trial sport bill for identify stop sell tend.',
  'category': 'productivity',
  'url': 'https://lopez-king.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'ai',
    'search',
    'voice',
    'music'
  ]
},
  {
  'id': 'williams-white',
  'name': 'Williams-White',
  'description': 'I sense high most wide tonight possible training thing old.',
  'category': 'data',
  'url': 'https://williams-white.ai',
  'pricing': 'subscription',
  'keywords': [
    'data',
    'video',
    'voice',
    'workflow',
    'creative'
  ]
},
  {
  'id': 'cooper-ltd',
  'name': 'Cooper Ltd',
  'description': 'Former decide firm still situation issue stand move might guess dream.',
  'category': 'ideas',
  'url': 'https://cooperltd.ai',
  'pricing': 'free',
  'keywords': [
    'chatbot',
    'music',
    'recipe',
    'productivity',
    'video'
  ]
},
  {
  'id': 'williams-guerrero',
  'name': 'Williams-Guerrero',
  'description': 'Realize base friend how ahead environmental more.',
  'category': 'web',
  'url': 'https://williams-guerrero.ai',
  'pricing': 'free',
  'keywords': [
    'education',
    'music',
    'video',
    'automation',
    'search'
  ]
},
  {
  'id': 'bennett-group',
  'name': 'Bennett Group',
  'description': 'Professor police can watch relate standard type manager.',
  'category': 'chat',
  'url': 'https://bennettgroup.ai',
  'pricing': 'freemium',
  'keywords': [
    'productivity',
    'workflow',
    'music',
    'education',
    'video'
  ]
},
  {
  'id': 'harris-boyd',
  'name': 'Harris-Boyd',
  'description': 'Concern kid many dog learn director let treatment field community dinner.',
  'category': 'social',
  'url': 'https://harris-boyd.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'creative',
    'workflow',
    'image',
    'analysis'
  ]
},
  {
  'id': 'phillips-burnett-and-bridges',
  'name': 'Phillips, Burnett and Bridges',
  'description': 'Hard campaign that letter month help west.',
  'category': 'learning',
  'url': 'https://phillips,burnettandbridges.ai',
  'pricing': 'freemium',
  'keywords': [
    'image',
    'video',
    'search',
    'voice',
    'design'
  ]
},
  {
  'id': 'baker-walker-and-hull',
  'name': 'Baker, Walker and Hull',
  'description': 'Mr else lose office prevent none.',
  'category': 'writing',
  'url': 'https://baker,walkerandhull.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'chatbot',
    'data',
    'workflow',
    'design'
  ]
},
  {
  'id': 'hays-warren-and-west',
  'name': 'Hays, Warren and West',
  'description': 'Least then begin sing on return maintain economic.',
  'category': 'data',
  'url': 'https://hays,warrenandwest.ai',
  'pricing': 'freemium',
  'keywords': [
    'music',
    'workflow',
    'analysis',
    'creative',
    'voice'
  ]
},
  {
  'id': 'padilla-inc',
  'name': 'Padilla Inc',
  'description': 'Stop too truth picture clearly address goal today issue nearly tough single week.',
  'category': 'audio',
  'url': 'https://padillainc.ai',
  'pricing': 'subscription',
  'keywords': [
    'productivity',
    'analysis',
    'recipe',
    'creative',
    'ai'
  ]
},
  {
  'id': 'sullivan-daniels',
  'name': 'Sullivan-Daniels',
  'description': 'Wait land hear discuss various fall threat itself half level else.',
  'category': 'data',
  'url': 'https://sullivan-daniels.ai',
  'pricing': 'free',
  'keywords': [
    'image',
    'video',
    'education',
    'automation',
    'chatbot'
  ]
},
  {
  'id': 'hunter-bauer-and-james',
  'name': 'Hunter, Bauer and James',
  'description': 'Realize answer factor perhaps argue want.',
  'category': 'cooking',
  'url': 'https://hunter,bauerandjames.ai',
  'pricing': 'freemium',
  'keywords': [
    'design',
    'ai',
    'creative',
    'recipe',
    'analysis'
  ]
},
  {
  'id': 'alvarez-harrison',
  'name': 'Alvarez-Harrison',
  'description': 'Age company last then play her standard dark measure create artist development.',
  'category': 'automation',
  'url': 'https://alvarez-harrison.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'image',
    'chatbot',
    'video',
    'workflow'
  ]
},
  {
  'id': 'garcia-king',
  'name': 'Garcia-King',
  'description': 'Include training western memory soldier manager forward learn early trouble similar list administration.',
  'category': 'audio',
  'url': 'https://garcia-king.ai',
  'pricing': 'paid',
  'keywords': [
    'ai',
    'recipe',
    'chatbot',
    'music',
    'data'
  ]
},
  {
  'id': 'tate-llc',
  'name': 'Tate LLC',
  'description': 'Kid line go several economic base loss nice eye station week quality.',
  'category': 'ideas',
  'url': 'https://tatellc.ai',
  'pricing': 'subscription',
  'keywords': [
    'chatbot',
    'video',
    'search',
    'design',
    'voice'
  ]
},
  {
  'id': 'brooks-patton',
  'name': 'Brooks-Patton',
  'description': 'Guess early part keep fight high wife must southern a.',
  'category': 'workflow',
  'url': 'https://brooks-patton.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'video',
    'voice',
    'creative',
    'ai'
  ]
},
  {
  'id': 'henry-winters-and-martin',
  'name': 'Henry, Winters and Martin',
  'description': 'Small both range special treat movement quality senior feeling.',
  'category': 'audio',
  'url': 'https://henry,wintersandmartin.ai',
  'pricing': 'freemium',
  'keywords': [
    'video',
    'data',
    'automation',
    'creative',
    'education'
  ]
},
  {
  'id': 'leonard-white-and-dunn',
  'name': 'Leonard, White and Dunn',
  'description': 'Feel center how over firm none want last far deep watch class responsibility.',
  'category': 'customer',
  'url': 'https://leonard,whiteanddunn.ai',
  'pricing': 'freemium',
  'keywords': [
    'education',
    'video',
    'ai',
    'recipe',
    'music'
  ]
},
  {
  'id': 'robinson-mcdonald-and-palmer',
  'name': 'Robinson, Mcdonald and Palmer',
  'description': 'Also avoid risk international staff use.',
  'category': 'writing',
  'url': 'https://robinson,mcdonaldandpalmer.ai',
  'pricing': 'subscription',
  'keywords': [
    'workflow',
    'music',
    'design',
    'education',
    'data'
  ]
},
  {
  'id': 'schwartz-thompson',
  'name': 'Schwartz-Thompson',
  'description': 'Involve similar health low ground type.',
  'category': 'cooking',
  'url': 'https://schwartz-thompson.ai',
  'pricing': 'freemium',
  'keywords': [
    'recipe',
    'voice',
    'education',
    'workflow',
    'automation'
  ]
},
  {
  'id': 'trujillo-herrera-and-rios',
  'name': 'Trujillo, Herrera and Rios',
  'description': 'Experience including PM six yet key population well interest rest can vote seek.',
  'category': 'productivity',
  'url': 'https://trujillo,herreraandrios.ai',
  'pricing': 'free',
  'keywords': [
    'video',
    'automation',
    'voice',
    'workflow',
    'chatbot'
  ]
}
];

export const findToolsByKeyword = (keyword: string): Tool[] => {
  const lowerKeyword = keyword.toLowerCase().trim();
  
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowerKeyword) ||
    tool.description.toLowerCase().includes(lowerKeyword) ||
    tool.category.includes(lowerKeyword as ToolCategory) ||
    tool.keywords.some(k => k.toLowerCase().includes(lowerKeyword))
  );
};
