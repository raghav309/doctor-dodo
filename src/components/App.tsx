import React from 'react';
import Markdoc from '@markdoc/markdoc';
import Sidebar from './Sidebar';
import Editor from './Editor';
import '../index.css';

function App() {
    const contentMdoc = `
    **Cognitive Spaces:** To form thoughts working memory, STM, and LTM is used. similarly we can divide intellegence sw system into three levels of cognitive space, a cognitive space has its data and procedures. working cognitive space, short term cognitive space and long term cognitive space. or we could create three ann for each cognitive space and connect them with each other.
    
    **Automatization:** Once you have practiced a skill so many times that you can do it without thinking about it, like walk-
    ing, reading, or tying your shoelaces, we say that you have automatized this skill. So to build complex (higher level) skills you have to build on top of primitive/simple (lower level) skills. Practice primitive skills long enough that they become your second nature and thn build complex skills on top of them. find out the primitive and complex skills in programming.
    
    A second technique you can use to improve your problem-solving skills is to deliberately study how others have solved problems. Solutions of how other people have solved problems are often called **worked examples**
    
    We could create a framework for different professions to train people by finding out the complex and primitve skills and creating deliberate practice sessions to automatization.
    
    ##### 10.2.2 Teach LTM to solve problems
    
    Earlier in the book we explained that thoughts are formed in the working memory. We also saw that your
    working memory does not form thoughts alone but operates in strong collaboration which both the LTM and the STM.
    
    When you think about a certain problem, let’s say implementing a sorting button on a web application, your working memory will make the decisions on what you implement. However, before your working memory you can make such a decision, it needs to do two things. First is to get information from the STM about the context of the problem, such as the requirements for the button or the existing code you just read. At the same time, the LTM is searched for relevant background knowledge. Relevant memories that you might have, such as how to implement sorting or information about the code base, are also sent to the working memory. To understand problem solving better, we need to explore this second process of searching the LTM.
    
    mark doc support for marktext, using pen and paper for problem solving rudces cognitive load, if we read book peak: how to master and anything and use its concepts like deliberate practice with the concepts in book programmers brain like automatization to build the plan for mastery.
    
    **The Programmer's Brain** book makes u think one level above the programming and brain and make you aware of the abstraction at that higher level that you can use to make yourself more productive.
    
    number of implicit memories in a certain domain are directly proportional to the complexity of task you can solve in that domain
    
    explicit memory required expilicit attention, Implicit memories, on the other hand, are created in a different way: by repetition. When you were a kid, you tried to eat soup with a spoon many times, and after a while you knew how to do it. The memory of how to do it was created though practice rather than thinking. That is why we call this implicit memory
    
    Implicit memories are formed in three different phases
    
    1. cognitive phase
      
    2. **associative phase:** In this phase you need to actively repeat the new information until patterns of response emerge.
      
    3. autonomous phase
      
    
    three different levels at which you can master a skill, let’s look at how you can use deliberate practice to improve skills that have not yet reached the autonomous stage. As we covered in chapter 2, the idea of deliberate practice is to use very small tasks and execute them repeatedly until you have reached perfection.
    
    Through practice we create LTM and this reduces the load on STM and working memory. working memory and stm is fixed in size but not ltm. to learn complex tasks we have to use ltm
    
    ##### 11.2.3 How to better prepare for interruptions
    
    three techniques to help deal with interruptions:
    
    1. store your mental model
      
    2. help your prospective memory
      
    3. label subgoals
    `;

    /*
        Markdoc.parse()
        Markdoc.transform()
        Markdoc.renderer.html()
    */
    const ast = Markdoc.parse(contentMdoc);
    const content = Markdoc.transform(ast);
    const html = Markdoc.renderers.react(content, React);

    return (
        <section className="flex flex-row">
            <Sidebar title="Files" />
            <Editor mdComponent={html} />
        </section>
    );
}

export default App;
