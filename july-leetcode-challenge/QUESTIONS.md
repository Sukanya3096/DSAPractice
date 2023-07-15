## July Leetcode Challenge 2023

- Longest Subarray of 1's After Deleting One Element

        Given a binary array nums, you should delete one element from it.
        Return the size of the longest non-empty subarray containing only 1's in the resulting array.
        Return 0 if there is no such subarray.

- Minimum Size Subarray Sum

        Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. 
        If there is no such subarray, return 0 instead.

-  Maximize the Confusion of an Exam

        A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

        You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

        Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
        Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

- Put Marbles in Bags

        You have k bags. You are given a 0-indexed integer array weights where weights[i] is the weight of the ith marble. You are also given the integer k.

        Divide the marbles into the k bags according to the following rules:

        No bag is empty.
        If the ith marble and jth marble are in a bag, then all marbles with an index between the ith and jth indices should also be in that same bag.
        If a bag consists of all the marbles with an index from i to j inclusively, then the cost of the bag is weights[i] + weights[j].
        The score after distributing the marbles is the sum of the costs of all the k bags.

        Return the difference between the maximum and minimum scores among marble distributions.

-  Substring With Largest Variance

        The variance of a string is defined as the largest difference between the number of occurrences of any 2 characters present in the string. Note the two characters may or may not be the same.

        Given a string s consisting of lowercase English letters only, return the largest variance possible among all substrings of s.

        A substring is a contiguous sequence of characters within a string.

- Minimum Depth of Binary Tree

        Given a binary tree, find its minimum depth.

        The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

        Note: A leaf is a node with no children.

- All Nodes Distance K in Binary Tree

        Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

        You can return the answer in any order.

- Find Eventual Safe States

        There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

        A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

        Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

- Course Schedule

        There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

        For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
        Return true if you can finish all courses. Otherwise, return false.

- Longest Arithmetic Subsequence of Given Difference

        Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.

        A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.

- Maximum Number of Events That Can Be Attended II

        You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.

        You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.

        Return the maximum sum of values that you can receive by attending events.