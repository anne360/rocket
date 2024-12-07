{
    "log": {
        "level": "warn",
        "timestamp": true
    },
    "dns": {
        "servers": [
            {
                "address": "https://8.8.8.8/dns-query",
                "address_resolver": "dns-direct",
                "strategy": "prefer_ipv4",
                "detour": "proxy",
                "tag": "dns-remote"
            },
            {
                "address": "8.8.8.8",
                "strategy": "prefer_ipv4",
                "detour": "direct",
                "tag": "dns-direct"
            },
            {
                "address": "rcode://success",
                "tag": "dns-block"
            },
            {
                "address": "fakeip",
                "tag": "dns-fake"
            }
        ],
        "rules": [
            {
                "outbound": "any",
                "server": "dns-direct"
            },
            {
                "disable_cache": true,
                "rule_set": [
                    "geosite-malware",
                    "geosite-phishing",
                    "geosite-cryptominers"
                ],
                "server": "dns-block"
            },
            {
                "disable_cache": true,
                "inbound": "tun-in",
                "query_type": [
                    "A",
                    "AAAA"
                ],
                "server": "dns-fake"
            }
        ],
        "independent_cache": true,
        "fakeip": {
            "enabled": true,
            "inet4_range": "198.18.0.0/15",
            "inet6_range": "fc00::/18"
        }
    },
    "inbounds": [
        {
            "type": "direct",
            "tag": "dns-in",
            "listen": "0.0.0.0",
            "listen_port": 6450,
            "override_address": "8.8.8.8",
            "override_port": 53
        },
        {
            "type": "tun",
            "tag": "tun-in",
            "inet4_address": "172.19.0.1/28",
            "inet6_address": "fdfe:dcba:9876::1/126",
            "mtu": 9000,
            "auto_route": true,
            "strict_route": true,
            "stack": "mixed",
            "sniff": true,
            "sniff_override_destination": true
        },
        {
            "type": "mixed",
            "tag": "mixed-in",
            "listen": "0.0.0.0",
            "listen_port": 2080,
            "sniff": true,
            "sniff_override_destination": false
        }
    ],
    "outbounds": [
        {
            "type": "selector",
            "tag": "proxy",
            "outbounds": [
                "💦 Best Ping 💥",
                "💦 1 - VLESS F - Domain : 443",
                "💦 2 - VLESS F - Domain : 443",
                "💦 3 - VLESS F - IPv4 : 443",
                "💦 4 - VLESS F - IPv4 : 443",
                "💦 5 - VLESS F - IPv6 : 443",
                "💦 6 - VLESS F - IPv6 : 443",
                "💦 7 - VLESS F - Clean IP : 443"
            ]
        },
        {
            "type": "urltest",
            "tag": "💦 Best Ping 💥",
            "outbounds": [
                "💦 1 - VLESS F - Domain : 443",
                "💦 2 - VLESS F - Domain : 443",
                "💦 3 - VLESS F - IPv4 : 443",
                "💦 4 - VLESS F - IPv4 : 443",
                "💦 5 - VLESS F - IPv6 : 443",
                "💦 6 - VLESS F - IPv6 : 443",
                "💦 7 - VLESS F - Clean IP : 443"
            ],
            "url": "https://www.gstatic.com/generate_204",
            "interval": "30s"
        },
        {
            "type": "direct",
            "tag": "direct"
        },
        {
            "type": "block",
            "tag": "block"
        },
        {
            "type": "dns",
            "tag": "dns-out"
        },
        {
            "type": "vless",
            "server": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev",
            "server_port": 443,
            "uuid": "8193e880-475e-4cd4-b7db-a7240000760a",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "PArAStoo-RJ-9b04A51a-aF99-4436-9d12-ba6C6F3EeCc3.PaGeS.Dev",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev"
                },
                "path": "/K2S26Xi9AGRS9CRt/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 1 - VLESS F - Domain : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "www.speedtest.net",
            "server_port": 443,
            "uuid": "8193e880-475e-4cd4-b7db-a7240000760a",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "pArASTOO-rJ-9b04a51a-aF99-4436-9D12-Ba6c6f3EECc3.paGes.dEv",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev"
                },
                "path": "/gAUAyiAHJXwUpIdC/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 2 - VLESS F - Domain : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "172.66.44.61",
            "server_port": 443,
            "uuid": "8193e880-475e-4cd4-b7db-a7240000760a",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "PaRaStOo-RJ-9b04A51A-aF99-4436-9D12-bA6C6f3EECc3.paGEs.dEv",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev"
                },
                "path": "/L3glVfBC7Cl8yRDb/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 3 - VLESS F - IPv4 : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "172.66.47.195",
            "server_port": 443,
            "uuid": "8193e880-475e-4cd4-b7db-a7240000760a",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "PArAstoo-RJ-9B04a51A-af99-4436-9D12-ba6C6F3EeCc3.PaGes.dEv",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev"
                },
                "path": "/llO9HTAJeJSQKUWr/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 4 - VLESS F - IPv4 : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "[2606:4700:310c::ac42:2c3d]",
            "server_port": 443,
            "uuid": "8193e880-475e-4cd4-b7db-a7240000760a",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "PArasToO-rj-9B04A51a-Af99-4436-9D12-Ba6C6f3eECc3.paGes.dEv",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "parastoo-rj-9b04a51a-af99-4436-9d12-ba6c6f3eecc3.pages.dev"
                },
                "path": "/3qzxRnvhouEvkgSV/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 5 - VLESS F - IPv6 : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "173.245.58.238",
            "server_port": 443,
            "uuid": "4d17d0c7-6e8f-4bca-a46b-e19567305451",
            "tls": {
                "alpn": "http/1.1",
                "enabled": true,
                "insecure": false,
                "server_name": "amir-ho1991-0192f481-92b2-7a27-a205-17617a867748.pages.dev",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "amir-ho1991-0192f481-92b2-7a27-a205-17617a867748.pages.dev"
                },
                "path": "/QE3Lg93TUnR4H7kK/cHJveHlpcC51cy5ody4wOTAyMjcueHl6",
                "type": "ws"
            },
            "tag": "💦 6 - VLESS F - IPv6 : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        },
        {
            "type": "vless",
            "server": "173.245.58.238",
            "server_port": 443,
            "uuid": "9698effa-9206-4fb9-aec2-f843f21b62b6",
            "tls": {
                "alpn": "h3",
                "enabled": true,
                "insecure": false,
                "server_name": "stravhat-0191ea55-05a8-721e-b060-1f592998f3e3.pages.dev",
                "utls": {
                    "enabled": true,
                    "fingerprint": "randomized"
                }
            },
            "transport": {
                "early_data_header_name": "Sec-WebSocket-Protocol",
                "max_early_data": 2560,
                "headers": {
                    "Host": "stravhat-0191ea55-05a8-721e-b060-1f592998f3e3.pages.dev"
                },
                "path": "/?ed=2048",
                "type": "ws"
            },
            "tag": "💦 7 - VLESS F - Clean IP : 443",
            "tls_fragment": {
                "enabled": true,
                "size": "100-200",
                "sleep": "1-1"
            }
        }
    ],
    "route": {
        "rules": [
            {
                "inbound": "dns-in",
                "outbound": "dns-out"
            },
            {
                "network": "udp",
                "port": 53,
                "outbound": "dns-out"
            },
            {
                "rule_set": [
                    "geosite-malware",
                    "geosite-phishing",
                    "geosite-cryptominers",
                    "geoip-malware",
                    "geoip-phishing"
                ],
                "outbound": "block"
            },
            {
                "ip_cidr": [
                    "224.0.0.0/3",
                    "ff00::/8"
                ],
                "source_ip_cidr": [
                    "224.0.0.0/3",
                    "ff00::/8"
                ],
                "outbound": "block"
            }
        ],
        "rule_set": [
            {
                "type": "remote",
                "tag": "geosite-malware",
                "format": "binary",
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
                "download_detour": "direct"
            },
            {
                "type": "remote",
                "tag": "geosite-phishing",
                "format": "binary",
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
                "download_detour": "direct"
            },
            {
                "type": "remote",
                "tag": "geosite-cryptominers",
                "format": "binary",
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs",
                "download_detour": "direct"
            },
            {
                "type": "remote",
                "tag": "geoip-malware",
                "format": "binary",
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs",
                "download_detour": "direct"
            },
            {
                "type": "remote",
                "tag": "geoip-phishing",
                "format": "binary",
                "url": "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs",
                "download_detour": "direct"
            }
        ],
        "auto_detect_interface": true,
        "override_android_vpn": true,
        "final": "proxy"
    },
    "ntp": {
        "enabled": true,
        "server": "time.apple.com",
        "server_port": 123,
        "detour": "direct",
        "interval": "30m"
    },
    "experimental": {
        "cache_file": {
            "enabled": true,
            "store_fakeip": true
        },
        "clash_api": {
            "external_controller": "0.0.0.0:9090",
            "external_ui": "yacd",
            "external_ui_download_url": "https://github.com/MetaCubeX/Yacd-meta/archive/gh-pages.zip",
            "external_ui_download_detour": "direct",
            "default_mode": "rule"
        }
    }
}
