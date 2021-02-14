import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Index() {
    const router = useRouter()

    const [params, setParams] = useState('')

    const parse = () => {
        let test = new URLSearchParams(params)

        return {
            oauth_token: test.get('oauth_token') || 'NO DATA',
            oauth_token_secret: test.get('oauth_token_secret') || 'NO DATA'
        }
    }

    const urlParams = new URLSearchParams(params)

    useEffect(() => {
        if (router.query) {
            console.log(router)
            const oauth_token = router.query.oauth_token
            const oauth_verifier = router.query.oauth_verifier

            const urlParams = Object.entries(router.query)
                .map(([key, val]) => `${key}=${val}`)
                .join('&')
            console.log(urlParams)

            if (oauth_token && oauth_verifier) {
                axios
                    .post('/api/callback', { urlParams: urlParams })
                    .then((res) => setParams(res.data))
                    .catch((err) => router.push('/'))
            }
        }
    }, [router])

    return (
        <div>
            <div className="flex min-h-screen bg-gray-200 p-6 min-w-screen">
                <div className="m-auto bg-white max-w-lg shadow-lg rounded-lg w-full space-y-4 p-12 text-gray-600">
                    <p className="space-y-2">
                        <p>Access token key:</p>
                        <p className="text-xs text-gray-400 font-mono">{parse().oauth_token}</p>
                    </p>
                    <p className="space-y-2">
                        <p>Access token key:</p>
                        <p className="text-xs text-gray-400 font-mono"> {parse().oauth_token}</p>
                    </p>
                    <Link href="/">
                        <a className="inline-block text-blue-600">Home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
