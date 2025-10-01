import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-fallback-api-key',
});

// Mock function for when OpenAI API key is not available
const generateMockContent = async (prompt: string, type: string, tone: string, length: number) => {
  // Generate more detailed and comprehensive sample content based on inputs
  let sampleContent = '';
  switch (type) {
    case 'blog':
      sampleContent = `**The Comprehensive Guide to ${prompt}**

## Introduction

In today's rapidly evolving digital landscape, understanding ${prompt} has become more critical than ever before. Whether you're a seasoned professional or a newcomer to the field, this comprehensive guide will provide you with the essential knowledge and practical insights needed to navigate the complexities of ${prompt} successfully.

${prompt} represents a fundamental shift in how we approach problem-solving, innovation, and strategic planning. As we delve deeper into this subject, we'll explore not just the what and how, but also the why behind ${prompt}, giving you a holistic understanding that goes beyond surface-level knowledge.

## Understanding the Fundamentals

To truly master ${prompt}, we must first establish a solid foundation of its core principles. ${prompt} is not merely a buzzword or passing trend; it's a transformative concept that has reshaped entire industries and continues to influence how we think about modern challenges.

The fundamental principles of ${prompt} can be broken down into several key components:

**Core Conceptual Framework**: At its heart, ${prompt} operates on a set of interconnected principles that work together to create a comprehensive approach to problem-solving.

**Evolution and Development**: Understanding how ${prompt} has evolved over time provides crucial context for its current applications and future potential.

**Practical Implementation**: The true value of ${prompt} lies in its practical application, which requires a nuanced understanding of both theory and real-world constraints.

## Key Benefits and Advantages

Implementing ${prompt} in your workflow or organization offers numerous compelling advantages:

**Enhanced Efficiency and Productivity**
By leveraging the principles of ${prompt}, teams and individuals can significantly streamline their processes, reducing time-to-market and eliminating redundant efforts. This efficiency gain translates directly into cost savings and competitive advantages.

**Improved Decision-Making Capabilities**
${prompt} provides a structured framework for analyzing complex situations, enabling more informed and strategic decision-making. This systematic approach reduces the likelihood of costly mistakes and helps identify opportunities that might otherwise be overlooked.

**Scalability and Adaptability**
One of the most significant advantages of ${prompt} is its inherent scalability. Whether you're working on a small project or managing enterprise-level initiatives, the principles remain consistent and adaptable to various contexts and requirements.

## Implementation Strategies

Successfully implementing ${prompt} requires a thoughtful, multi-phase approach:

**Phase 1: Assessment and Planning**
Begin by conducting a thorough assessment of your current situation and identifying specific areas where ${prompt} can add value. This phase involves stakeholder engagement, resource allocation planning, and timeline development.

**Phase 2: Pilot Program Development**
Rather than attempting a full-scale implementation from the outset, start with a pilot program that allows you to test concepts, refine processes, and build confidence among team members.

**Phase 3: Full-Scale Rollout**
Once you've validated your approach through the pilot phase, you can proceed with a full-scale implementation, incorporating lessons learned and best practices identified during earlier stages.

## Common Challenges and Solutions

While the benefits of ${prompt} are substantial, implementation is not without its challenges. Understanding these potential obstacles and having strategies to address them is crucial for success.

**Challenge 1: Resistance to Change**
Human resistance to new methodologies is natural and expected. Address this by providing comprehensive training, clear communication about benefits, and involving key stakeholders in the planning process.

**Challenge 2: Resource Constraints**
Implementing ${prompt} may require additional resources, both in terms of time and budget. Mitigate this by phasing implementation, leveraging existing tools and processes where possible, and clearly articulating the return on investment.

**Challenge 3: Measuring Success**
Determining the effectiveness of ${prompt} implementation can be challenging. Establish clear metrics and KPIs early in the process, and regularly review and adjust these measurements based on real-world outcomes.

## Best Practices for Success

To maximize the benefits of ${prompt}, consider these proven best practices:

1. **Start with Clear Objectives**: Define specific, measurable goals before beginning implementation.
2. **Engage Stakeholders Early**: Involve all relevant parties from the beginning to ensure buy-in and support.
3. **Invest in Training**: Provide comprehensive training to ensure all team members understand the concepts and can apply them effectively.
4. **Monitor and Adjust**: Continuously monitor progress and be prepared to make adjustments based on real-world feedback and results.
5. **Document and Share Learnings**: Create a knowledge base of lessons learned to inform future initiatives and share best practices across the organization.

## Future Trends and Developments

The landscape of ${prompt} continues to evolve, driven by technological advances, changing market conditions, and emerging best practices. Staying informed about these trends is essential for maintaining a competitive edge and ensuring your implementation remains current and effective.

**Key trends to watch**:
- Integration with emerging technologies
- Evolving regulatory and compliance considerations
- Shifting consumer expectations and market demands
- Advancements in measurement and analytics capabilities

## Conclusion

${prompt} represents a powerful approach to addressing complex challenges and unlocking new opportunities for growth and innovation. By understanding its fundamental principles, implementing proven strategies, and staying attuned to emerging trends, you can position yourself and your organization for sustained success in an increasingly competitive landscape.

The journey to mastering ${prompt} is ongoing, requiring continuous learning, adaptation, and refinement. However, the investment in this journey pays dividends in the form of enhanced capabilities, improved outcomes, and a stronger foundation for future success.`;
      break;
    case 'social':
      sampleContent = `**Deep Dive into ${prompt} - Transforming Industries!**

The landscape of ${prompt} is evolving at an unprecedented pace, reshaping how we approach innovation and problem-solving. Here's why this matters for forward-thinking professionals and organizations:

**Revolutionary Impact**: ${prompt} is fundamentally changing established paradigms, creating new opportunities for growth and competitive advantage.

**Cross-Industry Applications**: From healthcare to finance, education to technology, ${prompt} is finding applications across diverse sectors, demonstrating its versatility and value.

**Future-Proofing Strategies**: Organizations embracing ${prompt} are positioning themselves for long-term success in an increasingly complex and interconnected world.

**Data-Driven Insights**: The power of ${prompt} lies in its ability to transform raw information into actionable intelligence, enabling more informed decision-making.

**Collaborative Innovation**: ${prompt} fosters unprecedented levels of collaboration, breaking down traditional silos and encouraging cross-functional teamwork.

**Key Takeaway**: ${prompt} isn't just a trend—it's a fundamental shift that demands attention and strategic investment.

How is your organization leveraging ${prompt} to drive innovation and growth? 

We'd love to hear your experiences and insights in the comments below! 

**Innovation** **${prompt.replace(/\s+/g, '')}** **DigitalTransformation** **FutureTech** **Industry40** **TechTrends** **InnovationLeadership** **StrategicPlanning** **BusinessTransformation**`;
      break;
    case 'email':
      sampleContent = `Subject: Strategic Insights: Leveraging ${prompt} for Competitive Advantage

Dear Team,

I hope this message finds you well. I'm excited to share some important strategic insights about ${prompt} and how we can leverage this transformative approach to gain a significant competitive advantage in our market.

## Executive Summary

Our analysis indicates that ${prompt} represents a critical opportunity for organizational growth and innovation. The implementation of ${prompt} principles could potentially yield a 25-30% improvement in operational efficiency while simultaneously enhancing our product quality and customer satisfaction metrics.

## Key Strategic Opportunities

**Operational Excellence**
By integrating ${prompt} into our core processes, we can streamline workflows, reduce redundancies, and accelerate time-to-market for new initiatives. This operational refinement will directly impact our bottom line and customer experience.

**Innovation Acceleration**
${prompt} provides a structured framework for fostering innovation, enabling our teams to explore new solutions and approaches with greater confidence and systematic methodology.

**Competitive Differentiation**
Early adoption of ${prompt} positions us as industry leaders, distinguishing our offerings and approach from competitors who may still rely on outdated methodologies.

## Implementation Roadmap

**Phase 1: Assessment and Planning **(Weeks 1-3)
- Conduct comprehensive stakeholder interviews
- Analyze current state processes and identify improvement opportunities
- Develop detailed implementation plan with clear milestones and success metrics

**Phase 2: Pilot Program Launch **(Weeks 4-8)
- Select cross-functional team for pilot initiative
- Implement ${prompt} principles in controlled environment
- Document lessons learned and refine approach

**Phase 3: Full-Scale Rollout **(Weeks 9-16)
- Expand implementation across all relevant departments
- Provide comprehensive training and support
- Monitor progress and adjust as needed

## Resource Requirements

To successfully implement this initiative, we'll need:
- Dedicated project team (2-3 FTE)
- Training and development budget ($15,000)
- Technology platform enhancements ($25,000)
- Ongoing support and maintenance (OPEX: $5,000/month)

## Expected Outcomes

Upon successful implementation, we anticipate:
- 25% improvement in process efficiency
- 15% reduction in operational costs
- 20% increase in customer satisfaction scores
- Enhanced innovation capacity and time-to-market improvements

## Next Steps

I recommend we schedule a strategic planning session for next week to discuss this opportunity in detail and begin developing our implementation approach. Please let me know your availability for Tuesday or Wednesday afternoon.

Best regards,

[Your Name]
[Your Title]
[Contact Information]`;
      break;
    case 'product':
      sampleContent = `**Introducing the Revolutionary ${prompt} Solution**

Experience the next generation of ${prompt} with our cutting-edge, AI-powered solution designed to transform how you approach complex challenges and unlock unprecedented value for your organization.

## Product Overview

Our ${prompt} solution represents the culmination of years of research, development, and real-world testing. Built on a foundation of industry expertise and cutting-edge technology, this comprehensive platform delivers unparalleled capabilities that address the most pressing challenges in ${prompt}.

## Core Features

**Advanced AI-Driven Analytics**: Leverage machine learning algorithms to uncover insights and patterns that would be impossible to detect through traditional methods.

**Intuitive User Interface**: Our carefully designed interface ensures that powerful capabilities are accessible to users at all skill levels, reducing training time and increasing adoption rates.

**Real-Time Collaboration**: Enable seamless teamwork with real-time collaboration features that allow multiple stakeholders to contribute and engage simultaneously.

**Scalable Architecture**: Built to grow with your organization, our solution can handle everything from small projects to enterprise-level implementations without compromising performance.

**Comprehensive Security Framework**: Protect your sensitive data with enterprise-grade security features, including end-to-end encryption, multi-factor authentication, and compliance with industry standards.

**Customizable Workflows**: Adapt the platform to your specific needs with fully customizable workflows that can be tailored to match your unique processes and requirements.

## Technical Specifications

**Platform Compatibility**: Cloud-based deployment with mobile and desktop applications
**Integration Capabilities**: RESTful APIs and pre-built connectors for popular enterprise platforms
**Performance Metrics**: 99.9% uptime guarantee with sub-second response times
**Scalability**: Supports organizations from 10 to 100,000+ users
**Compliance**: GDPR, HIPAA, and SOC 2 compliant

## Implementation and Support

**Getting Started**
Our dedicated implementation team works closely with your organization to ensure a smooth onboarding process, including:
- Comprehensive needs assessment
- Customized configuration and setup
- Staff training and certification
- Ongoing support and optimization

**Training and Resources**
We provide extensive training resources, including:
- Interactive online courses
- Comprehensive documentation and best practices guides
- Regular webinars and workshops
- 24/7 customer support with dedicated account management

## Pricing and Packages

**Starter Plan**
Perfect for small teams and pilot programs:
- Up to 25 users
- Core feature set
- Basic support
- $499/month

**Professional Plan**
Ideal for growing organizations:
- Up to 100 users
- Advanced features and analytics
- Priority support
- $1,299/month

**Enterprise Plan**
Comprehensive solution for large organizations:
- Unlimited users
- Full feature set with customizations
- Dedicated support and account management
- Custom pricing

## Customer Success Stories

**Global Financial Institution**
"After implementing the ${prompt} solution, we achieved a 35% improvement in operational efficiency and reduced processing time by 40%. The platform's intuitive interface made adoption seamless across our organization."

**Healthcare Provider Network**
"The real-time collaboration features have transformed how our teams work together, enabling faster decision-making and improved patient outcomes. We've seen a 20% increase in productivity since implementation."

## Transform Your Approach to ${prompt}

Ready to experience the future of ${prompt}? Contact our sales team today for a personalized demonstration and discover how our solution can drive measurable results for your organization.

[Contact Sales] | [Schedule Demo] | [Request Trial]`;
      break;
    default:
      sampleContent = `**Comprehensive Analysis of ${prompt}**

## Executive Summary

This detailed examination of ${prompt} provides stakeholders with a thorough understanding of its significance, applications, and strategic implications. As a fundamental concept in modern practice, ${prompt} demands careful consideration and strategic implementation to realize its full potential.

## Detailed Exploration

**Historical Context and Evolution**
${prompt} has undergone significant development over the past several decades, evolving from rudimentary concepts to sophisticated frameworks that address complex contemporary challenges. Understanding this evolution is crucial for appreciating current applications and anticipating future developments.

**Core Principles and Methodologies**
The foundational principles of ${prompt} are built upon a robust theoretical framework that emphasizes systematic approaches to problem-solving, innovation, and strategic planning. These principles include:

**Systematic Analysis**: A structured approach to examining all relevant factors and variables
**Evidence-Based Decision Making**: Reliance on data and empirical evidence rather than intuition or assumption
**Continuous Improvement**: An ongoing commitment to refinement and optimization based on results and feedback
**Collaborative Engagement**: Recognition that the most effective solutions emerge from diverse perspectives and expertise

**Strategic Applications**
In practice, ${prompt} can be applied across numerous domains to drive meaningful results and create sustainable competitive advantages. Organizations that successfully implement ${prompt} principles typically experience significant improvements in efficiency, innovation capacity, and stakeholder satisfaction.

## Implementation Framework

To effectively leverage ${prompt} within your organization, consider the following implementation framework:

**Phase 1: Foundation Building**
Establish the necessary groundwork for successful ${prompt} integration, including stakeholder alignment, resource allocation, and success metric definition.

**Phase 2: Pilot Development**
Initiate small-scale pilot programs to test concepts, refine approaches, and build organizational confidence before full-scale deployment.

**Phase 3: Full Deployment**
Expand implementation across the organization, incorporating lessons learned and best practices identified during earlier phases.

**Phase 4: Continuous Optimization**
Maintain ongoing focus on improvement and adaptation, ensuring that ${prompt} implementation continues to deliver value as conditions and requirements evolve.

## Conclusion

${prompt} represents a powerful paradigm for addressing complex challenges and unlocking new opportunities for growth and innovation. By understanding its principles, implementing proven strategies, and maintaining commitment to continuous improvement, organizations can position themselves for sustained success in an increasingly competitive landscape.`;
  }
  
  return sampleContent;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, contentType, type, tone, length } = req.body;

    // Validate input
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required and must be a string' });
    }

    // Use contentType if provided, otherwise use type for backward compatibility
    const contentFormat = contentType || type;
    
    if (!contentFormat || typeof contentFormat !== 'string') {
      return res.status(400).json({ error: 'Content type is required and must be a string' });
    }

    if (!tone || typeof tone !== 'string') {
      return res.status(400).json({ error: 'Tone is required and must be a string' });
    }

    if (!length || typeof length !== 'number') {
      return res.status(400).json({ error: 'Length is required and must be a number' });
    }

    // In a real application, you would use the OpenAI API
    // For now, we'll use the mock function
    const content = await generateMockContent(prompt, contentFormat, tone, length);
    
    // Uncomment the following code to use the actual OpenAI API with improved training:
    /*
    // Enhanced prompt for better content quality with bold headings instead of hashtags
    const systemPrompt = `You are an expert content writer and industry specialist with deep knowledge in ${contentFormat} creation. Your task is to generate high-quality, actionable content about "${prompt}" with a ${tone} tone.

Guidelines for content generation:
1. Structure: Use clear headings with **bold formatting** instead of hashtags (#), subheadings, bullet points, and numbered lists for easy readability
2. Depth: Provide comprehensive coverage with specific examples, case studies, and actionable insights
3. Value: Focus on practical advice that readers can immediately apply
4. Research: Reference current trends, best practices, and data-backed insights
5. Length: Create content approximately ${length} words long
6. Tone: Maintain a ${tone} voice throughout while ensuring professionalism and clarity
7. Formatting: Use **bold text** for main headings and important terms instead of hashtags
8. Keywords: Include relevant keywords naturally throughout the content

Specific requirements for each content type:
- Blog posts: Include introduction, main sections with **bold headings**, key takeaways, and conclusion
- Social media: Use engaging hooks, emojis, and **bold text** for key points instead of hashtags
- Emails: Follow professional email structure with subject line, greeting, body with **bold section headers**, and signature
- Product descriptions: Highlight features, benefits, use cases, and value propositions with **bold headings**

Ensure all content is original, plagiarism-free, and provides genuine value to the reader. Format headings in **bold** rather than using markdown hashtags. Use larger, bold text for main headings to make them stand out.`;
    
    // Using GPT-4 for higher quality content with better parameters
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // GPT-4 for superior content quality
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Please generate ${contentFormat} content about "${prompt}" following the guidelines above.` }
      ],
      max_tokens: length * 4, // Increased token limit for more detailed content
      temperature: 0.7, // Balance between creativity and consistency
      top_p: 0.9, // Nucleus sampling for better quality
      frequency_penalty: 0.5, // Reduce repetition
      presence_penalty: 0.5, // Encourage new topics
    });
    
    const content = completion.choices[0].message.content;
    */

    // Return the generated content
    res.status(200).json({ content });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
}