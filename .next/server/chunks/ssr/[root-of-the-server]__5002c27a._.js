module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/lib/mockData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockAIProcessingQueue": (()=>mockAIProcessingQueue),
    "mockAPIUsage": (()=>mockAPIUsage),
    "mockAuditLogs": (()=>mockAuditLogs),
    "mockBatchUploads": (()=>mockBatchUploads),
    "mockCandidateComments": (()=>mockCandidateComments),
    "mockCandidateStatusHistory": (()=>mockCandidateStatusHistory),
    "mockCandidateTags": (()=>mockCandidateTags),
    "mockCandidates": (()=>mockCandidates),
    "mockCompanies": (()=>mockCompanies),
    "mockJobMatches": (()=>mockJobMatches),
    "mockJobs": (()=>mockJobs),
    "mockProcessingMetrics": (()=>mockProcessingMetrics),
    "mockSavedSearches": (()=>mockSavedSearches),
    "mockUsers": (()=>mockUsers)
});
// Utility function to generate UUIDs
const generateUUID = ()=>{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const mockCompanies = [
    {
        id: 'comp-1',
        name: 'TechCorp Solutions',
        slug: 'techcorp-solutions',
        subscription_plan: 'enterprise',
        max_users: 50,
        max_jobs_per_month: 100,
        created_at: new Date('2023-01-15'),
        updated_at: new Date('2024-01-15'),
        is_active: true
    },
    {
        id: 'comp-2',
        name: 'StartupHub Inc',
        slug: 'startupHub-inc',
        subscription_plan: 'professional',
        max_users: 25,
        max_jobs_per_month: 50,
        created_at: new Date('2023-06-10'),
        updated_at: new Date('2024-06-10'),
        is_active: true
    },
    {
        id: 'comp-3',
        name: 'SmallBiz Ltd',
        slug: 'smallbiz-ltd',
        subscription_plan: 'starter',
        max_users: 5,
        max_jobs_per_month: 10,
        created_at: new Date('2023-09-20'),
        updated_at: new Date('2024-09-20'),
        is_active: true
    }
];
const mockUsers = [
    {
        id: 'user-1',
        company_id: 'comp-1',
        email: 'admin@techcorp.com',
        password_hash: 'hashed_password_1',
        full_name: 'John Anderson',
        role: 'admin',
        created_at: new Date('2023-01-16'),
        updated_at: new Date('2024-01-16'),
        is_active: true
    },
    {
        id: 'user-2',
        company_id: 'comp-1',
        email: 'recruiter@techcorp.com',
        password_hash: 'hashed_password_2',
        full_name: 'Sarah Johnson',
        role: 'recruiter',
        created_at: new Date('2023-02-01'),
        updated_at: new Date('2024-02-01'),
        is_active: true
    },
    {
        id: 'user-3',
        company_id: 'comp-2',
        email: 'admin@startupHub.com',
        password_hash: 'hashed_password_3',
        full_name: 'Mike Chen',
        role: 'admin',
        created_at: new Date('2023-06-11'),
        updated_at: new Date('2024-06-11'),
        is_active: true
    },
    {
        id: 'user-4',
        company_id: 'comp-2',
        email: 'recruiter@startupHub.com',
        password_hash: 'hashed_password_4',
        full_name: 'Emily Davis',
        role: 'recruiter',
        created_at: new Date('2023-07-01'),
        updated_at: new Date('2024-07-01'),
        is_active: true
    },
    {
        id: 'user-5',
        company_id: 'comp-3',
        email: 'owner@smallbiz.com',
        password_hash: 'hashed_password_5',
        full_name: 'David Wilson',
        role: 'admin',
        created_at: new Date('2023-09-21'),
        updated_at: new Date('2024-09-21'),
        is_active: true
    }
];
const mockJobs = [
    {
        id: 'job-1',
        company_id: 'comp-1',
        title: 'Senior Software Engineer',
        description: 'We are looking for a senior software engineer with 5+ years of experience in React, Node.js, and TypeScript. The ideal candidate will have experience with microservices architecture and cloud platforms.',
        location: 'San Francisco, CA',
        employment_type: 'full_time',
        salary_min: 120000,
        salary_max: 180000,
        created_at: new Date('2024-01-10'),
        updated_at: new Date('2024-01-10'),
        is_active: true
    },
    {
        id: 'job-2',
        company_id: 'comp-1',
        title: 'Product Manager',
        description: 'Seeking an experienced product manager to lead our enterprise software products. Must have 3+ years of product management experience and strong analytical skills.',
        location: 'New York, NY',
        employment_type: 'full_time',
        salary_min: 100000,
        salary_max: 140000,
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-01-15'),
        is_active: true
    },
    {
        id: 'job-3',
        company_id: 'comp-2',
        title: 'Frontend Developer',
        description: 'Join our startup as a frontend developer! We\'re looking for someone passionate about creating amazing user experiences with React and modern web technologies.',
        location: 'Austin, TX',
        employment_type: 'full_time',
        salary_min: 80000,
        salary_max: 110000,
        created_at: new Date('2024-01-20'),
        updated_at: new Date('2024-01-20'),
        is_active: true
    },
    {
        id: 'job-4',
        company_id: 'comp-2',
        title: 'DevOps Engineer',
        description: 'We need a DevOps engineer to help scale our infrastructure. Experience with AWS, Docker, and Kubernetes is required.',
        location: 'Remote',
        employment_type: 'contract',
        salary_min: 90000,
        salary_max: 130000,
        created_at: new Date('2024-02-01'),
        updated_at: new Date('2024-02-01'),
        is_active: true
    },
    {
        id: 'job-5',
        company_id: 'comp-3',
        title: 'Full Stack Developer',
        description: 'Small but growing company looking for a versatile full stack developer. Must be comfortable with both frontend and backend technologies.',
        location: 'Denver, CO',
        employment_type: 'full_time',
        salary_min: 70000,
        salary_max: 95000,
        created_at: new Date('2024-02-10'),
        updated_at: new Date('2024-02-10'),
        is_active: true
    }
];
const mockCandidates = [
    {
        id: 'cand-1',
        full_name: 'Alice Thompson',
        email: 'alice.thompson@email.com',
        phone: '+1-555-0101',
        resume_url: 'https://tmpfiles.org/dl/1803766/convert.pdf',
        created_at: new Date('2024-01-05'),
        updated_at: new Date('2024-01-05'),
        is_active: true
    },
    {
        id: 'cand-2',
        full_name: 'Bob Rodriguez',
        email: 'bob.rodriguez@email.com',
        phone: '+1-555-0102',
        resume_url: '/resumes/bob-rodriguez.pdf',
        created_at: new Date('2024-01-08'),
        updated_at: new Date('2024-01-08'),
        is_active: true
    },
    {
        id: 'cand-3',
        full_name: 'Carol Kim',
        email: 'carol.kim@email.com',
        phone: '+1-555-0103',
        resume_url: '/resumes/carol-kim.pdf',
        created_at: new Date('2024-01-12'),
        updated_at: new Date('2024-01-12'),
        is_active: true
    },
    {
        id: 'cand-4',
        full_name: 'Daniel Brown',
        email: 'daniel.brown@email.com',
        phone: '+1-555-0104',
        resume_url: '/resumes/daniel-brown.pdf',
        created_at: new Date('2024-01-18'),
        updated_at: new Date('2024-01-18'),
        is_active: true
    },
    {
        id: 'cand-5',
        full_name: 'Eva Martinez',
        email: 'eva.martinez@email.com',
        phone: '+1-555-0105',
        resume_url: '/resumes/eva-martinez.pdf',
        created_at: new Date('2024-01-25'),
        updated_at: new Date('2024-01-25'),
        is_active: true
    },
    {
        id: 'cand-6',
        full_name: 'Frank Liu',
        email: 'frank.liu@email.com',
        phone: '+1-555-0106',
        resume_url: '/resumes/frank-liu.pdf',
        created_at: new Date('2024-02-02'),
        updated_at: new Date('2024-02-02'),
        is_active: true
    }
];
const mockJobMatches = [
    {
        id: 'match-1',
        job_id: 'job-1',
        candidate_id: 'cand-1',
        status: 'interviewing',
        score: 0.89,
        analysis: {
            skills_match: 0.92,
            experience_match: 0.85,
            education_match: 0.90,
            salary_expectations: 0.88
        },
        created_at: new Date('2024-01-11'),
        updated_at: new Date('2024-01-20')
    },
    {
        id: 'match-2',
        job_id: 'job-1',
        candidate_id: 'cand-2',
        status: 'applied',
        score: 0.76,
        analysis: {
            skills_match: 0.80,
            experience_match: 0.75,
            education_match: 0.85,
            salary_expectations: 0.65
        },
        created_at: new Date('2024-01-12'),
        updated_at: new Date('2024-01-12')
    },
    {
        id: 'match-3',
        job_id: 'job-2',
        candidate_id: 'cand-3',
        status: 'applied',
        score: 0.91,
        analysis: {
            skills_match: 0.88,
            experience_match: 0.95,
            education_match: 0.92,
            salary_expectations: 0.90
        },
        created_at: new Date('2024-01-16'),
        updated_at: new Date('2024-02-01')
    },
    {
        id: 'match-4',
        job_id: 'job-3',
        candidate_id: 'cand-4',
        status: 'rejected',
        score: 0.45,
        analysis: {
            skills_match: 0.50,
            experience_match: 0.30,
            education_match: 0.60,
            salary_expectations: 0.40
        },
        created_at: new Date('2024-01-21'),
        updated_at: new Date('2024-01-25')
    },
    {
        id: 'match-5',
        job_id: 'job-4',
        candidate_id: 'cand-5',
        status: 'hired',
        score: 0.94,
        analysis: {
            skills_match: 0.96,
            experience_match: 0.90,
            education_match: 0.95,
            salary_expectations: 0.95
        },
        created_at: new Date('2024-02-03'),
        updated_at: new Date('2024-02-15')
    }
];
const mockAIProcessingQueue = [
    {
        id: 'ai-1',
        job_id: 'job-1',
        candidate_id: 'cand-6',
        status: 'processing',
        result: null,
        created_at: new Date('2024-02-20'),
        updated_at: new Date('2024-02-20')
    },
    {
        id: 'ai-2',
        job_id: 'job-2',
        candidate_id: 'cand-4',
        status: 'completed',
        result: {
            match_score: 0.72,
            processing_time: 1.5,
            confidence: 0.85
        },
        created_at: new Date('2024-02-19'),
        updated_at: new Date('2024-02-19')
    }
];
const mockAuditLogs = [
    {
        id: 'audit-1',
        user_id: 'user-1',
        action: 'create_job',
        entity: 'job',
        entity_id: 'job-1',
        details: {
            title: 'Senior Software Engineer'
        },
        created_at: new Date('2024-01-10')
    },
    {
        id: 'audit-2',
        user_id: 'user-2',
        action: 'update_match_status',
        entity: 'job_match',
        entity_id: 'match-1',
        details: {
            old_status: 'applied',
            new_status: 'interviewing'
        },
        created_at: new Date('2024-01-20')
    }
];
const mockBatchUploads = [
    {
        id: 'batch-1',
        company_id: 'comp-1',
        job_id: 'job-1',
        file_name: 'resumes_batch_january.zip',
        status: 'completed',
        uploaded_by: 'user-2',
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-01-15')
    },
    {
        id: 'batch-2',
        company_id: 'comp-2',
        job_id: 'job-3',
        file_name: 'candidate_cvs_feb.zip',
        status: 'processing',
        uploaded_by: 'user-4',
        created_at: new Date('2024-02-10'),
        updated_at: new Date('2024-02-10')
    }
];
const mockSavedSearches = [
    {
        id: 'search-1',
        user_id: 'user-2',
        name: 'Senior Engineers',
        query: {
            keywords: [
                'senior',
                'engineer'
            ],
            location: 'San Francisco',
            salary_min: 100000
        },
        created_at: new Date('2024-01-05'),
        updated_at: new Date('2024-01-05')
    }
];
const mockCandidateTags = [
    {
        id: 'tag-1',
        candidate_id: 'cand-1',
        tag: 'React Expert',
        created_at: new Date('2024-01-11')
    },
    {
        id: 'tag-2',
        candidate_id: 'cand-1',
        tag: 'Senior Level',
        created_at: new Date('2024-01-11')
    },
    {
        id: 'tag-3',
        candidate_id: 'cand-3',
        tag: 'Product Management',
        created_at: new Date('2024-01-16')
    }
];
const mockProcessingMetrics = [
    {
        id: 'metric-1',
        job_id: 'job-1',
        candidate_id: 'cand-1',
        metric: 'cv_parsing_time',
        value: 2.5,
        created_at: new Date('2024-01-11')
    },
    {
        id: 'metric-2',
        job_id: 'job-1',
        candidate_id: 'cand-1',
        metric: 'matching_score_calculation',
        value: 0.89,
        created_at: new Date('2024-01-11')
    }
];
const mockCandidateStatusHistory = [
    {
        id: 'status-1',
        candidate_id: 'cand-1',
        status: 'new',
        updated_by: 'user-2',
        updated_at: new Date('2024-01-05')
    },
    {
        id: 'status-2',
        candidate_id: 'cand-1',
        status: 'reviewed',
        updated_by: 'user-2',
        updated_at: new Date('2024-01-11')
    },
    {
        id: 'status-3',
        candidate_id: 'cand-1',
        status: 'interviewed',
        updated_by: 'user-1',
        updated_at: new Date('2024-01-20')
    }
];
const mockCandidateComments = [
    {
        id: 'comment-1',
        candidate_id: 'cand-1',
        user_id: 'user-2',
        comment: 'Strong technical background, especially in React and Node.js. Would be a good fit for our senior engineer position.',
        created_at: new Date('2024-01-11')
    },
    {
        id: 'comment-2',
        candidate_id: 'cand-1',
        user_id: 'user-1',
        comment: 'Interview went well. Candidate showed deep understanding of system architecture.',
        created_at: new Date('2024-01-20')
    }
];
const mockAPIUsage = [
    {
        id: 'api-1',
        company_id: 'comp-1',
        user_id: 'user-1',
        endpoint: '/api/candidates',
        request_payload: {
            query: 'React developer'
        },
        response_payload: {
            results: 15
        },
        status_code: 200,
        created_at: new Date('2024-02-01')
    },
    {
        id: 'api-2',
        company_id: 'comp-1',
        user_id: 'user-2',
        endpoint: '/api/job-matches',
        request_payload: {
            job_id: 'job-1'
        },
        response_payload: {
            matches: 5
        },
        status_code: 200,
        created_at: new Date('2024-02-01')
    }
];
}}),
"[project]/src/services/jobMatchService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "jobMatchService": (()=>jobMatchService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-ssr] (ecmascript)");
;
;
const jobMatchService = {
    async getJobMatches (jobId) {
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 500));
        if (jobId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobMatches"].filter((match)=>match.job_id === jobId);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobMatches"];
    },
    async getCandidateMatches (candidateId) {
        await new Promise((resolve)=>setTimeout(resolve, 500));
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobMatches"].filter((match)=>match.candidate_id === candidateId);
    },
    async updateMatchStatus (matchId, status) {
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const match = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobMatches"].find((m)=>m.id === matchId);
        if (!match) throw new Error('Match not found');
        match.status = status;
        match.updated_at = new Date();
        return match;
    },
    async calculateMatchScore (jobId, candidateId) {
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Simulate AI matching logic
        const score = Math.random() * 0.5 + 0.5; // Random score between 0.5 and 1.0
        const analysis = {
            skills_match: Math.random() * 0.3 + 0.7,
            experience_match: Math.random() * 0.3 + 0.7,
            education_match: Math.random() * 0.3 + 0.7,
            location_match: Math.random() * 0.3 + 0.7
        };
        const match = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            job_id: jobId,
            candidate_id: candidateId,
            status: 'applied',
            score,
            analysis,
            created_at: new Date(),
            updated_at: new Date()
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockJobMatches"].push(match);
        return match;
    }
};
}}),
"[project]/src/hooks/use-matches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMatches": (()=>useMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobMatchService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/jobMatchService.ts [app-ssr] (ecmascript)");
;
;
;
function useMatches() {
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppContext"])();
    const loadMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            const matches = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobMatchService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobMatchService"].getJobMatches(jobId);
            dispatch({
                type: 'SET_MATCHES',
                payload: matches
            });
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to load matches'
            });
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    }, [
        dispatch
    ]);
    const updateMatchStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (matchId, status)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            const updatedMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobMatchService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jobMatchService"].updateMatchStatus(matchId, status);
            if (updatedMatch) {
                dispatch({
                    type: 'UPDATE_MATCH',
                    payload: updatedMatch
                });
            }
            return updatedMatch;
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to update match status'
            });
            throw error;
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    }, [
        dispatch
    ]);
    return {
        matches: state.matches,
        loading: state.loading,
        error: state.error,
        loadMatches,
        updateMatchStatus
    };
}
}}),
"[project]/src/services/candidateService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "candidateService": (()=>candidateService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-ssr] (ecmascript)");
;
const candidateService = {
    async getAll () {
        return new Promise((resolve)=>{
            setTimeout(()=>resolve([
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCandidates"]
                ]), 100);
        });
    },
    async create (candidate) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const newCandidate = {
                    ...candidate,
                    id: `cand-${Date.now()}`,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                resolve(newCandidate);
            }, 200);
        });
    },
    async update (id, updates) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const candidate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockCandidates"].find((c)=>c.id === id);
                if (candidate) {
                    const updated = {
                        ...candidate,
                        ...updates,
                        updated_at: new Date()
                    };
                    resolve(updated);
                } else {
                    resolve(null);
                }
            }, 200);
        });
    },
    async delete (id) {
        return new Promise((resolve)=>{
            setTimeout(()=>resolve(true), 200);
        });
    }
};
}}),
"[project]/src/hooks/use-candidates.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCandidates": (()=>useCandidates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$candidateService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/candidateService.ts [app-ssr] (ecmascript)");
;
;
;
function useCandidates() {
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCandidates();
    }, []);
    const loadCandidates = async ()=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$candidateService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateService"].getAll();
            dispatch({
                type: 'SET_CANDIDATES',
                payload: candidates
            });
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to load candidates'
            });
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    const createCandidate = async (candidateData)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            const newCandidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$candidateService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateService"].create(candidateData);
            dispatch({
                type: 'ADD_CANDIDATE',
                payload: newCandidate
            });
            return newCandidate;
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to create candidate'
            });
            throw error;
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    const updateCandidate = async (id, updates)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            const updatedCandidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$candidateService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateService"].update(id, updates);
            if (updatedCandidate) {
                dispatch({
                    type: 'UPDATE_CANDIDATE',
                    payload: updatedCandidate
                });
            }
            return updatedCandidate;
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to update candidate'
            });
            throw error;
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    const deleteCandidate = async (id)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$candidateService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateService"].delete(id);
            dispatch({
                type: 'DELETE_CANDIDATE',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to delete candidate'
            });
            throw error;
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    return {
        candidates: state.candidates,
        loading: state.loading,
        error: state.error,
        loadCandidates,
        createCandidate,
        updateCandidate,
        deleteCandidate
    };
}
}}),
"[project]/src/app/jobs/[id]/candidates/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>JobCandidatesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$candidates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-candidates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function JobCandidatesPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const jobId = params.id;
    const { matches, loading: matchesLoading, loadMatches, updateMatchStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMatches"])();
    const { candidates, loading: candidatesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$candidates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCandidates"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [selectedResumeUrl, setSelectedResumeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (jobId) {
            loadMatches(jobId);
        }
    }, [
        jobId,
        loadMatches
    ]);
    const enrichedMatches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return matches.map((match)=>{
            const candidate = candidates.find((c)=>c.id === match.candidate_id);
            return {
                ...match,
                candidate
            };
        });
    }, [
        matches,
        candidates
    ]);
    const handleStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (matchId, status)=>{
        try {
            await updateMatchStatus(matchId, status);
            toast({
                title: 'Success',
                description: 'Candidate status updated'
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to update candidate status',
                variant: 'destructive'
            });
        }
    }, [
        updateMatchStatus,
        toast
    ]);
    const getStatusColor = (status)=>{
        switch(status){
            case 'hired':
                return 'text-green-500';
            case 'rejected':
                return 'text-red-500';
            case 'interviewing':
                return 'text-blue-500';
            case 'offered':
                return 'text-purple-500';
            default:
                return 'text-yellow-500';
        }
    };
    if (matchesLoading || candidatesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg",
                children: "Loading candidates..."
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: "Matching Candidates"
                        }, void 0, false, {
                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: enrichedMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "py-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "No matching candidates found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Upload CVs to find matching candidates for this position."
                            }, void 0, false, {
                                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this) : enrichedMatches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium",
                                                    children: match.candidate?.full_name || 'Unknown Candidate'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500 space-y-1",
                                                    children: [
                                                        match.candidate?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this),
                                                                match.candidate.email
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 25
                                                        }, this),
                                                        match.candidate?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 27
                                                                }, this),
                                                                match.candidate.phone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 25
                                                        }, this),
                                                        match.candidate?.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Added ",
                                                                new Date(match.candidate.created_at).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${getStatusColor(match.status)} mt-1`,
                                                    children: [
                                                        "Status: ",
                                                        match.status.charAt(0).toUpperCase() + match.status.slice(1)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>handleStatusChange(match.id, 'interviewing'),
                                                    disabled: match.status === 'interviewing',
                                                    children: "Interview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>handleStatusChange(match.id, 'offered'),
                                                    disabled: match.status === 'offered',
                                                    children: "Offer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>handleStatusChange(match.id, 'hired'),
                                                    disabled: match.status === 'hired',
                                                    children: "Hire"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    onClick: ()=>handleStatusChange(match.id, 'rejected'),
                                                    disabled: match.status === 'rejected',
                                                    children: "Reject"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium mb-2",
                                                    children: [
                                                        "Match Score: ",
                                                        ((match.score || 0) * 100).toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                    value: (match.score || 0) * 100,
                                                    className: "w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium mb-2",
                                                            children: "Skills Match"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                            value: match.analysis.skills_match * 100,
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium mb-2",
                                                            children: "Experience Match"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                            value: match.analysis.experience_match * 100,
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium mb-2",
                                                            children: "Education Match"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                            value: match.analysis.education_match * 100,
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium mb-2",
                                                            children: "Location Match"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                            value: match.analysis.location_match * 100,
                                                            className: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        match.candidate?.resume_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-gray-50 p-3 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4 mr-2 text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Resume available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 23
                                                }, this),
                                                "                      ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>match.candidate?.resume_url && setSelectedResumeUrl(match.candidate.resume_url),
                                                    children: "View Resume"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    }, match.id, false, {
                        fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/jobs/[id]/candidates/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5002c27a._.js.map