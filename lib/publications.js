// Add one object per paper, newest first. Every field except title,
// authors and venue is optional; empty links are not rendered. Add
// video: '<YouTube id or URL>' to embed a talk or demo under a paper.
const publications = [
  {
    title:
      'EnTrust: Modeling Inter-Modal Conflict for Trustworthy Multimodal Medical Image Analysis',
    authors:
      'Dwarikanath Mahapatra, Abhijit Das, Behzad Bozorgtabar, Zongyuan Ge, Sudipta Roy, Deepak Nayak, Mauricio Reyes, Imran Razzak',
    venue: 'arXiv 2026',
    status: 'Preprint',
    links: { paper: 'https://arxiv.org/abs/2606.21384' }
  },
  {
    title:
      'PROTON: Prototype-Based Test-Time Online OOD Detection for Medical VLMs',
    authors:
      'Abhijit Das, Nichula Wasalathilaka, Yifan Lu, Adinath Dukre, Dwarikanath Mahapatra, Shadab Khan, Imran Razzak',
    venue: 'MICCAI 2026',
    links: { paper: 'https://arxiv.org/abs/2606.20913' }
  },
  {
    title:
      'Graph-of-Differences: Anatomy-Structured Difference Alignment for Medical Image Re-Identification',
    authors:
      'Nichula Wasalathilaka, Abhijit Das, Imran Razzak, Dwarikanath Mahapatra',
    venue: 'MICCAI 2026',
    links: { paper: 'https://arxiv.org/abs/2606.21368' }
  },
  {
    title:
      'Weight-Decay Turns Transformer Loss Landscapes Villani: Functional-Analytic Foundations for Optimization and Generalization',
    authors: 'Abhijit Das, Sayantan Dutta',
    venue: 'arXiv 2026',
    status: 'Preprint',
    links: { paper: 'https://arxiv.org/abs/2605.06599' }
  },
  {
    title:
      'Ethical Framework for Responsible Foundational Models in Medical Imaging',
    authors:
      'Debesh Jha, Gorkem Durak, Abhijit Das, Jasmer Sanjotra, Onkar Susladkar, Suramyaa Sarkar, Ashish Rauniyar, et al.',
    venue: 'Frontiers in Medicine 2025',
    links: {
      paper:
        'https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1544501/full'
    }
  },
  {
    title:
      'Confidence-guided Semi-supervised Learning for Generalized Lesion Localization in X-ray Images',
    authors:
      'Abhijit Das, Vandan Gorade, Komal Kumar, Snehashis Chakraborty, Dwarikanath Mahapatra, Sudipta Roy',
    venue: 'MICCAI 2024',
    links: {
      paper: 'https://papers.miccai.org/miccai-2024/154-Paper3485.html',
      code: 'https://github.com/aj-das-research/AnoMed'
    }
  },
  {
    title:
      'ProFONet: Prototypical Feature Space Optimized Network for Few-shot Classification',
    authors:
      'Abhijit Das, Vandan Gorade, Debesh Jha, Koushik Biswas, Pethuru Raj, Ulas Bagci',
    venue: 'ICPR 2024',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-031-78183-4_25',
      code: 'https://github.com/aj-das-research/ProFONet'
    }
  },
  {
    title:
      'SEANet: Rethinking Skip-Connections Design in Encoder-Decoder Networks via Synergistic Spatial-Spectral Fusion for LDCT Denoising',
    authors: 'Abhijit Das, Vandan Gorade, Dwarikanath Mahapatra, Sudipta Roy',
    venue: 'ICPR 2024',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-031-78198-8_29',
      code: 'https://github.com/aj-das-research/SEANet'
    }
  },
  {
    title:
      'PAM-UNet: Shifting Attention on Region of Interest in Medical Images',
    authors:
      'Abhijit Das, Debesh Jha, Vandan Gorade, Koushik Biswas, Hongyi Pan, Zheyuan Zhang, Daniela P. Ladner, Yury Velichko, Amir Borhani, Ulas Bagci',
    venue: 'IEEE EMBC 2024',
    links: { paper: 'https://arxiv.org/abs/2405.01503' }
  },
  {
    title:
      'Enhancing Colonoscopy Outcomes with DAPoDet-based AI for Real-time Sessile Serrated Polyp Detection',
    authors:
      'Abhijit Das, Debesh Jha, Nikhil Tomar, Neethi Dasu, Mark Geissler, Dayang Wang, Mena Bakhit, Kirti Dasu, Tyler Berzin, Ulas Bagci',
    venue: 'DDW 2024',
    status: 'Conference abstract',
    links: {
      paper: 'https://www.giejournal.org/article/S0016-5107(24)00898-8/fulltext'
    }
  }
]

export default publications
